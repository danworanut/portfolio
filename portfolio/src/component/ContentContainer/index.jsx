import React, { useEffect, useState } from "react";
import Date from "../Date";
import TitleLink from "../TitleLink";
import Meterial from "../Meterial";
import Description from "../Description";
import Picture from "../Picture";
import Tech from "../Tech";

export default function ContentContainer({
  onInitial,
  title: sectionTitle = "",
  data = {},
}) {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  const section_id = `${sectionTitle}-section`;

  useEffect(() => {
    onInitial(section_id);
  }, []);

  return (
    <>
      <div id={section_id} className="scroll-mt-14">
        <div className="font-semibold px-2 text-primaryTitle ">
          {sectionTitle}
        </div>
        {data.map(
          (
            {
              date = "",
              title = "",
              link = "",
              meterials = [],
              descs = [],
              skills = [],
              picture = "",
            },
            index
          ) => (
            <div
              key={`${section_id}-${index}`}
              className={`grid grid-cols-[25%_75%] py-6 px-2 transition-all ${
                isMouseEnter[`${section_id}-${index}`]
                  ? "bg-primaryAccent rounded-md"
                  : ""
              } `}
              onMouseEnter={() =>
                setIsMouseEnter({ [`${section_id}-${index}`]: true })
              }
              onMouseLeave={() =>
                setIsMouseEnter({ [`${section_id}-${index}`]: false })
              }
            >
              <div>
                <Date isHighlight={isMouseEnter[`${section_id}-${index}`]}>
                  {date}
                </Date>
                <Picture picture={picture} title={title} />
              </div>
              <div className="grid gap-y-4 ">
                <TitleLink
                  title={title}
                  isHighlight={isMouseEnter[`${section_id}-${index}`]}
                  link={link}
                />
                {meterials.length > 0 ? (
                  <div className="flex gap-4 text-xl item-center">
                    {meterials.map((e, i) => (
                      <Meterial
                        key={`${e.type}-${i}`}
                        icon={e.type}
                        link={e.link}
                      />
                    ))}
                  </div>
                ) : null}

                {descs.map((e, index) => (
                  <Description key={`desc-${index}`} desc={e} />
                ))}
                {skills.map((skill, skillIndex) => (
                  <div key={`skill-container-${index}-${skillIndex}`}>
                    <Tech
                      key={`tech-${index}-${skillIndex}`}
                      isHighlight={isMouseEnter[`${section_id}-${index}`]}
                      data={skill}
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
