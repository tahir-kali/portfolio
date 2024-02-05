import {Analytics} from "@pages";

const privatePaths = [
    {
        path: "/analytics",
        component: Analytics
    }
]

export default privatePaths.map(record=>{
    record['meta'] = {auth:true};
    return record;
});