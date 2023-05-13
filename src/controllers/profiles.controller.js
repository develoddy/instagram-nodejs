export const getProfiles = ( req, res ) => {
    res.send('getting profiles');
}

export const createProfile = ( req, res ) => {
    console.log(req.body);
    res.send('creating profiles');
}
