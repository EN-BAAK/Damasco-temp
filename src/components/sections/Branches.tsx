import React from 'react';
import { Container } from 'react-bootstrap';
import HeadingTitle from '../HeadingTitle';
import { useTranslation } from 'react-i18next';
import branches from "../../config/branches.json"
import Branch from '../Branch';

const Branches = (): React.JSX.Element => {
  const { t: translating, i18n } = useTranslation('global');
  const language = i18n.language === "ar" ? "ar" : i18n.language === "en" ? "en" : "fr"

  return (
    <section id="branches" className='overflow-hidden bg-light'>
      <Container>
        <HeadingTitle title={translating('global.branches')} desc={translating('branches.desc')} />

        <div className="branches-container position-relative w-100">
          <span
            data-ani="complete-line-y"
            data-duration="3.5"
            data-delay=".1"
            className='line' />

          {
            branches[language].map(branchGroup =>
              <React.Fragment key={`{branch-group-${branchGroup.id}}`}>
                <span className="location fs-6 d-block my-1 mx-auto px-3 py-1 fw-bold">{branchGroup.location}</span>

                <div className="clear" />

                {
                  branchGroup.branches.map(branch =>
                    <React.Fragment key={`branch-${branch.id}`}>
                      <Branch
                        title={branch.title && branch.title}
                        address={branch.address}
                        phone={branch.phone}
                        telephone={branch.telephone}
                        side={!(branch.id % 2 === 0) && !(branchGroup.id % 3 === 0)}
                        animationDelay={(branchGroup.id + branch.id) * 0.1}
                      />
                      <div className="clear" />
                    </React.Fragment>
                  )
                }
              </React.Fragment>
            )
          }
        </div>

      </Container>
    </section>
  );
};

export default Branches;