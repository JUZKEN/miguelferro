import _ from 'lodash';
import React, { useState } from 'react';

function ProjectItem({item, onHover, onHoverLeave, moveImage, changePreviewImage}) {
  const [itemHovered, setItemHovered] = useState(false);
  const toggleItemHover = () => setItemHovered(!itemHovered);
  const projectTitleElement = <h2 className='title'>{item.data.title}</h2>

  return (
    <div className={itemHovered ? "mf-home__featured-projects__item active" : "mf-home__featured-projects__item"}>
        <div className="project" onMouseMove={moveImage} onMouseEnter={() => {
              toggleItemHover();
              changePreviewImage(item.data.primaryImage.url);
              onHover();
            }}
            onMouseLeave={() => {
              toggleItemHover();
              onHoverLeave();
            }}>
              {item.data.website.url ?
              <a href={item.data.website.url} target="_blank" rel="noreferrer">
                {projectTitleElement}
              </a>
              : projectTitleElement}
        </div>
        {item.data.category ?
        <div className='category'>
          <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.8026 6.75127C22.9206 6.75127 22.0473 6.58162 21.2325 6.25204C20.4176 5.92245 19.6773 5.43939 19.0536 4.83039C18.43 4.22139 17.9353 3.49837 17.5978 2.70267C17.2603 1.90698 17.0865 1.05415 17.0865 0.192893C17.0865 0.12731 17.0865 0.0617259 17.0865 0H11.5557C11.5557 0.0655838 11.5557 0.12731 11.5557 0.192893C11.5557 1.96507 11.9591 3.71506 12.7367 5.31634C13.5142 6.91762 14.6464 8.33016 16.0515 9.45178C14.6464 10.5734 13.5142 11.9859 12.7367 13.5872C11.9591 15.1885 11.5557 16.9385 11.5557 18.7107C11.5557 18.7762 11.5557 18.838 11.5557 18.9036H17.0865C17.0865 18.8418 17.0865 18.7762 17.0865 18.7107C17.0865 16.9713 17.7941 15.3031 19.0536 14.0732C20.3131 12.8432 22.0214 12.1523 23.8026 12.1523H24.0001V6.75127H23.8026Z" fill="#DFECD3"/><path d="M12.2469 6.8477C11.3649 6.8477 10.4916 6.67806 9.67679 6.34847C8.86197 6.01888 8.12159 5.53582 7.49795 4.92682C6.87431 4.31782 6.37961 3.59481 6.0421 2.79911C5.70459 2.00341 5.53086 1.15059 5.53086 0.289329C5.53086 0.223745 5.53086 0.158161 5.53086 0.0964355H0C0 0.162019 0 0.223745 0 0.289329C6.78097e-05 2.0615 0.403461 3.8115 1.18099 5.41278C1.95852 7.01406 3.09075 8.4266 4.4958 9.54821C3.09075 10.6698 1.95852 12.0824 1.18099 13.6836C0.403461 15.2849 6.78097e-05 17.0349 0 18.8071C0 18.8727 0 18.9344 0 19H5.53086C5.53086 18.9383 5.53086 18.8727 5.53086 18.8071C5.53086 17.0677 6.23845 15.3995 7.49795 14.1696C8.75745 12.9397 10.4657 12.2487 12.2469 12.2487H12.4444V6.8477H12.2469Z" fill="#DFECD3"/></svg>
          {item.data.category}
        </div>
        : null}
        
    </div>
  );
}

export default ProjectItem;