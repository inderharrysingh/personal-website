"use client"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Briefcase, WorkflowIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Fragment } from 'react';
import { Bree_Serif } from 'next/font/google';


export default function Experience() {

    const { theme } = useTheme()

    const exp_data = [
        { date: "2023 - Present", description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading", title: "Bondu", location: "randua ", icon: <Briefcase /> },
        { date: "2023 - Present", description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading", title: "Bondu", location: "randua ", icon: <Briefcase /> },
        { date: "2023 - Present", description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading", title: "Bondu", location: "randua ", icon: <Briefcase /> },
        { date: "2023 - Present", description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading", title: "Bondu", location: "randua ", icon: <Briefcase /> },
    ]
    return (<div>
        no Experience
    </div>
    )

}