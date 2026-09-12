import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import {
  SiPhp, SiPython, SiMysql,
  SiDart, SiFlutter, SiFirebase,
  SiAndroidstudio, SiGit,
  SiFigma, SiSketch, SiFramer, SiMiro,
} from 'react-icons/si';
import { FaPencilRuler, FaJava } from 'react-icons/fa';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/skills.css';

const iconMap = {
  FaJava, SiPhp, SiPython, SiMysql,
  SiDart, SiFlutter, SiFirebase,
  SiAndroidstudio, SiGit,
  SiFigma, SiSketch, SiFramer, SiMiro,
  FaPencilRuler,
};
function Skills(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.skills, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      {data ? (
        <div className="section-content-container">
          <Fade triggerOnce>
            <div className="bento">
              {data.intro && (
                <div className="tile skills-intro-tile span-6">
                  <ReactMarkdown>{data.intro}</ReactMarkdown>
                </div>
              )}
              {data.skills?.map((category) => (
                <div key={category.title} className="tile tile--interactive skill-category-tile span-2">
                  <h3 className="skill-category-title">{category.title}</h3>
                  <div className="skill-grid">
                    {category.items.map((item) => {
                      const IconComponent = iconMap[item.icon];
                      return (
                        <div key={item.title} className="skill-item">
                          {IconComponent && <IconComponent size={48} />}
                          <span>{item.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      ) : <FallbackSpinner /> }
    </>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Skills;