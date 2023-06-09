import { Stack, TextField, Button, Text } from "@inube/design-system";

function FormUI(props) {
  const { formik, isFormSubmitted, isLoading, imagen } = props;
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <img src={imagen} alt="Descripción de la imagen" />
        <Stack direction="column" gap="32px">
          <Stack direction="column" gap="4px">
            <Text typo="headlineSmall">Contact information</Text>
            <Text typo="titleSmall">
              Complete your information to register in Linix
            </Text>
          </Stack>
          <Stack direction="column" alignItems="center" gap="20px">
            <TextField
              label="Name"
              id="name"
              name="name"
              type="text"
              state={
                formik.touched.name && formik.errors.name
                  ? "invalid"
                  : undefined
              }
              errorMessage={formik.errors.name}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.name}
              size="compact"
              placeholder="Type your name"
              isFullWidth={true}
              isDisabled={isLoading}
              isRequired={true}
            />

            <TextField
              label="Identification"
              id="identification"
              name="identification"
              type="number"
              state={
                formik.touched.identification && formik.errors.identification
                  ? "invalid"
                  : undefined
              }
              errorMessage={formik.errors.identification}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.identification}
              size="compact"
              placeholder="Type your identification number"
              isFullWidth={true}
              isDisabled={isLoading}
              isRequired={true}
            />

            <TextField
              label="Phone Number"
              id="phoneNumber"
              name="phoneNumber"
              type="number"
              state={
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? "invalid"
                  : undefined
              }
              errorMessage={formik.errors.phoneNumber}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              size="compact"
              placeholder="Type your phone number"
              isFullWidth={true}
              isDisabled={isLoading}
              isRequired={true}
            />

            <TextField
              label="Mail"
              id="email"
              name="email"
              type="email"
              state={
                formik.touched.email && formik.errors.email
                  ? "invalid"
                  : undefined
              }
              errorMessage={formik.errors.email}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.email}
              size="compact"
              placeholder="Type your mail"
              isFullWidth={true}
              isDisabled={isLoading}
              isRequired={true}
            />

            <TextField
              label="Username"
              id="userName"
              name="userName"
              type="text"
              state={
                formik.touched.userName && formik.errors.userName
                  ? "invalid"
                  : undefined
              }
              errorMessage={formik.errors.userName}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.userName}
              size="compact"
              placeholder="Type your username"
              isFullWidth={true}
              isDisabled={isLoading}
              isRequired={true}
            />

            <TextField
              label="Password"
              id="password"
              name="password"
              type="password"
              state={
                formik.touched.password && formik.errors.password
                  ? "invalid"
                  : undefined
              }
              errorMessage={formik.errors.password}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.password}
              size="compact"
              placeholder="Create password"
              isFullWidth={true}
              isDisabled={isLoading}
              isRequired={true}
            />

            <TextField
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              state={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "invalid"
                  : undefined
              }
              errorMessage={formik.errors.confirmPassword}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              size="compact"
              placeholder="Confirm Password"
              isFullWidth={true}
              isDisabled={isLoading}
              isRequired={true}
            />

            <Button
              type="submit"
              isLoading={isLoading}
              appearance={isLoading ? "secondary" : undefined}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
      {isFormSubmitted && (
        <div className="success-message">
          <Text appearance="light" typo="labelMedium">
            Your data was sent correctly
          </Text>
        </div>
      )}
    </>
  );
}

export { FormUI };
