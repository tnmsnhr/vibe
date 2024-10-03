import { glyphMap } from "UIComponents/Icon/glyphMap";

export interface EventType {
    icon: keyof typeof glyphMap;
    name: string,
}

export const eventTypeData: EventType[] = [
    {
        icon: "calendar-empty",
        name: "Music"
    },
    {
        icon: "cog",
        name: "Clothing"
    },
    {
        icon: "compass",
        name: "Festival"
    },
    {
        icon: "home",
        name: "Biking"
    },
    {
        icon: "location",
        name: "Cycling"
    },
    {
        icon: "bookmark-empty",
        name: "Sports"
    }
]