
const okResponses = {
    CREATED_SUCCESSFULLY: "Records Created Successfully",
    NEARBY_USERS_FOUND : "Nearby Users Found Successfully",
    RECORDS_FOUND : "All Records Found Successfully",
    OTP_GENERATED : "OTP Generated Successfully",
    TOKEN_GENERATED : "Token Generated Successfully",
}

const internalServerErrorResponses = {
    INTERNAL_SERVER_ERROR : "Error In The Api"
}

const notFoundResponse = {
    NOT_FOUND : "No User Found",
    NO_RECORDS_FOUND : "No Records Found",
    INVALID_OTP : "Invalid OTP" 
}

const conflictResponses = {
    DUPLICATE_ENTRY: 'This entry already exists.',
  };

  const badRequestResponse = {
    USER_ALREADY_EXISTS : "User Already Exists",
    PROVIDE_EMAIL_OR_PASSWORD : "Please provide email or password",
  }
module.exports = {
    okResponses,
    internalServerErrorResponses,
    notFoundResponse,
    conflictResponses,
    badRequestResponse,

}