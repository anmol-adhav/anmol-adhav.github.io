// ORCID API Integration for Publications
const ORCID_ID = '0000-0002-3504-8675';
const ORCID_API_BASE = 'https://pub.orcid.org/v3.0';

// Function to fetch publications from ORCID API
async function fetchORCIDPublications() {
  const publicationsContainer = document.getElementById('publications-content');
  
  try {
    // Show loading message
    publicationsContainer.innerHTML = '<p>Loading publications from ORCID...</p>';
    
    // Fetch works from ORCID API
    const worksResponse = await fetch(`${ORCID_API_BASE}/${ORCID_ID}/works`, {
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!worksResponse.ok) {
      throw new Error(`HTTP error! status: ${worksResponse.status}`);
    }
    
    const worksData = await worksResponse.json();
    
    if (!worksData.group || worksData.group.length === 0) {
      publicationsContainer.innerHTML = '<p>No publications found on ORCID profile.</p>';
      return;
    }
    
    // Fetch detailed information for each work
    const publications = [];
    const fetchPromises = worksData.group.slice(0, 10).map(async (group) => {
      try {
        const putCode = group['work-summary'][0]['put-code'];
        const workDetailResponse = await fetch(`${ORCID_API_BASE}/${ORCID_ID}/work/${putCode}`, {
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (workDetailResponse.ok) {
          const workDetail = await workDetailResponse.json();
          return parseWorkDetail(workDetail);
        }
      } catch (error) {
        console.error('Error fetching work detail:', error);
        return null;
      }
    });
    
    const results = await Promise.all(fetchPromises);
    const validPublications = results.filter(pub => pub !== null);
    
    if (validPublications.length === 0) {
      publicationsContainer.innerHTML = '<p>No publication details could be retrieved from ORCID.</p>';
      return;
    }
    
    // Sort publications by year (newest first)
    validPublications.sort((a, b) => (b.year || 0) - (a.year || 0));
    
    // Create HTML for publications
    const publicationsHTML = `
      <ul class="publications-list">
        ${validPublications.map(pub => createPublicationHTML(pub)).join('')}
      </ul>
      <p class="orcid-attribution">
        <small>Publications automatically fetched from 
        <a href="https://orcid.org/${ORCID_ID}" target="_blank">ORCID profile</a>
        </small>
      </p>
    `;
    
    publicationsContainer.innerHTML = publicationsHTML;
    
  } catch (error) {
    console.error('Error fetching ORCID publications:', error);
    publicationsContainer.innerHTML = `
      <p>Unable to load publications from ORCID at the moment.</p>
      <p><small>Please visit my <a href="https://orcid.org/${ORCID_ID}" target="_blank">ORCID profile</a> to view publications.</small></p>
    `;
  }
}

// Function to parse work detail from ORCID API response
function parseWorkDetail(workDetail) {
  try {
    const title = workDetail.title?.title?.value || 'Untitled';
    const journal = workDetail['journal-title']?.value || '';
    const year = workDetail['publication-date']?.year?.value || '';
    
    // Extract DOI or other external identifiers
    let link = '';
    if (workDetail['external-ids']?.['external-id']) {
      const externalIds = workDetail['external-ids']['external-id'];
      const doi = externalIds.find(id => id['external-id-type'] === 'doi');
      if (doi && doi['external-id-value']) {
        link = `https://doi.org/${doi['external-id-value']}`;
      }
    }
    
    // Extract authors (contributors)
    let authors = 'Anmol Adhav';
    if (workDetail.contributors?.contributor) {
      const contributorNames = workDetail.contributors.contributor
        .map(contributor => {
          const creditName = contributor['credit-name'];
          return creditName ? creditName.value : '';
        })
        .filter(name => name)
        .slice(0, 5); // Limit to first 5 authors
      
      if (contributorNames.length > 0) {
        authors = contributorNames.join(', ');
        if (workDetail.contributors.contributor.length > 5) {
          authors += ', et al.';
        }
      }
    }
    
    return {
      title,
      authors,
      journal,
      year,
      link
    };
  } catch (error) {
    console.error('Error parsing work detail:', error);
    return null;
  }
}

// Function to create HTML for a single publication
function createPublicationHTML(publication) {
  const { title, authors, journal, year, link } = publication;
  
  let publicationText = `${authors}`;
  if (year) {
    publicationText += ` (${year})`;
  }
  publicationText += `. <em>${title}</em>`;
  if (journal) {
    publicationText += `. ${journal}`;
  }
  
  let linkHTML = '';
  if (link) {
    linkHTML = ` <a href="${link}" target="_blank" rel="noopener noreferrer">[DOI]</a>`;
  }
  
  return `<li class="publication-item">${publicationText}${linkHTML}</li>`;
}

// Load publications when page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log("Welcome to your portfolio & blog site!");
  fetchORCIDPublications();
});