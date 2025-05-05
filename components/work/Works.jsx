/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { projectsData } from './Data';
import WorksItems from './WorksItems';
import { projectsNav } from './Data';

const Works = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(false);
    const [pagiNum, setPagiNum] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if(item.name === "all") {
            setProjects(projectsData);
        } else {
          const newProjects = projectsData.filter((project) => {
            return project.category === item.name;
          });
          setProjects(newProjects);
        }
    }, [item]);

    useEffect(() => {
      if (projectsData.length % 6 > 0)
      {
        setPagiNum(Number.parseInt(projectsData.length / 6) + 1)
      };
    }, [pagiNum]);

    useEffect(() => {
      const paginationProjects = projectsData.filter((project) => {
        return project.id >= (6 * (currentPage - 1) + 1) && project.id <= (6 * currentPage)
      });
      setProjects(paginationProjects);
    }, [currentPage]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    };

    const handlePagination = (e, page) => {
        setCurrentPage(page);
    };

  return (
    <div>
      <div className="work__filters">
          {projectsNav.map((item, index) => {
              return (
                  <span onClick={(e) => {
                      handleClick(e, index);
                  }} className={`${active === index ? 'active-work' : ''} work__item`} key={index}>{item.name}</span>
              );
          })}
      </div>

      <div>
          <div className="work__container container grid">
              {projects.map((item) => {
                  return <WorksItems item={item} key={item.id}/>
              })}
          </div>
      </div>

      <div className="work__pagi">
        <Stack spacing={2}>
          <Pagination count={pagiNum} variant="outlined" color="primary" size="large" onChange={(e, page) => handlePagination(e, page) } />
        </Stack>
      </div>
    </div>
  )
}

export default Works