module.exports = {
    apps: [
        {
            name: 'sveltekit-starter',
            script: 'PORT=3000 node ./build/index.js',
            time: true,
            watch: true,
        },
    ],
};
