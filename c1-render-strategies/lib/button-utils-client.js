const actionHandlers = {
    mod_meta: (attr, action) => ({ ...attr, ...action }),
    alert: (_, { message }) => alert(message),
    redirect: (_, { url }) => window.location.href = url,
};

export const handleClick = (data, currentAttrs, count) => {
    let sum = 0;
    for (const x of data.clicks) {
        sum += x.count;
        if (count === sum) {
            let newAttr = {...currentAttrs};
            for (const action of x.actions) {
                const { name, ...rest } = action;
                newAttr = actionHandlers[name](newAttr, rest) || newAttr;
            }

            return newAttr;
        } else if (sum > count) {
            return currentAttrs;
        }
    }

    return currentAttrs;
};

export const fetchButtons = async () => {
    const buttons = await fetch('/api/buttons');
    return await buttons.json();
}