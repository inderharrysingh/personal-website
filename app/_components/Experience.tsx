"use client"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Briefcase, WorkflowIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Fragment } from 'react';
import "react-vertical-timeline-component/style.min.css";


export default function Experience() {

    const { theme } = useTheme()

    const exp_data = [
        
        { date: "2023 - Present", description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading", title: "Bondu", location: "randua ", icon: <Briefcase /> },
        { date: "2023 - Present", description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading", title: "Bondu", location: "randua ", icon: <Briefcase /> },
        { date: "2023 - Present", description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading", title: "Bondu", location: "randua ", icon: <Briefcase /> },
    ]
    return (<div className='scoll-mt-28 mb-28 md:mb-40'>

            <VerticalTimeline lineColor="">
                    {exp_data.map((item, index) => (
                    <Fragment key={index}>
                        <VerticalTimelineElement
                        contentStyle={{
                            background:
                            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                            boxShadow: "none",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            textAlign: "left",
                            padding: "1.3rem 2rem",
                        }}

                        
                        contentArrowStyle={{
                            borderRight:
                            theme === "light"
                                ? "0.4rem solid #9ca3af"
                                : "0.4rem solid rgba(255, 255, 255, 0.5)",
                        }}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                            background:
                            theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                            fontSize: "1.5rem",
                        }}
                        >
                        <h3 className="font-semibold capitalize">{item.title}</h3>
                        <p className="font-normal !mt-0">{item.location}</p>
                        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                            {item.description}
                        </p>
                        </VerticalTimelineElement>
                    </Fragment>
                    ))}
                </VerticalTimeline>
    </div>
    )

}