// module.exports = () => ({});
module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        register: {
          allowedFields: ['address','name']
        },
      },
    },
  });
  