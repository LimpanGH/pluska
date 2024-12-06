// functions/json-server.js
exports.handler = async (event, context) => {
    const data = {
      transactions: [
        { id: "1", text: "Salary", amount: 1000 },
        { id: "2", text: "Grocery", amount: -200 },
      ],
    };
  
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  };
  