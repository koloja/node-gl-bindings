export default (obj: Record<string, any>): Record<string, any> => {
    const resOBJ: Record<string, any> = {};

    for (const key in obj) {if (obj.hasOwnProperty(key)) {
        let res = key;

        if (res.startsWith('glfw')) res = res.slice(4);
        else if (res.startsWith('gl')) res = res.slice(2);
        res = res.charAt(0).toLowerCase() + res.slice(1);
        resOBJ[res] = obj[key];
    }};
    return resOBJ;
};