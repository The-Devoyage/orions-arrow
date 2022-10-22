# Changelog

## [v0.0.6]

### Changed
- Register/Create Account - Update Validation so that password is not required.
- User Input - Email is now optional to match API.
- Provide fix to `removeUnusedProperties` utility function - Now removes empty strings when nested.
- Create phone regex to match API/GraphQL Scalars Library Validation.
- Memberships Input on Create User no longer requires account unless memberships object is present.
- Address Input Validation - State only required when country is United States of America.
- Membership Validation - Nullable values are now valid without errors.
- Create Media & Delete Media - The `refetchQueries` option now passes the correct queries to run on media create and delete.
- Get Media Validation - Enabled.

