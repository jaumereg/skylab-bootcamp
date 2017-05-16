 let userInfo = process.argv.slice(2)
    let user = {};
    [,user.username, user.email] = userInfo;

    console.log(user);