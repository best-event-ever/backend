

// error handling middleware / Fehlerbehandlungsmiddleware
export const errorHandler = (err, req, res, next) => {
  console.log("err name", err.name);
  console.log("err message", err.message);
  // die Eigenschaft statusCode haben die Error-Objekte normalerweise nicht, die fügen wir manuel hinzu
  console.log("err status code", err.statusCode);
  // console.log("err stack", err.stack);
  // Als Entwickler möchten wir eigentlich meistens alles ausloggen lassen
  console.log(err);
  // Nullish coalescing operator
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
  const statusCode = err.statusCode ?? 500;

  res.status(statusCode).send({
    error: {
      status: statusCode,
      message: err.message
    }
  });
};