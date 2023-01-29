/* eslint-disable */
import * as React from "react";
import { FormattedMessage } from "react-intl";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, DialogContent, DialogActions, Alert } from "@mui/material";
import { useState } from "react";

interface contactData extends FieldValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const REGEX = {
  personalName: /^[a-z ,.'-]+$/i,
  phone:
    /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i,
  email:
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
};

const ERROR_MESSAGES = {
  REQUIRED: "This field is required",
  NAME_MIN_LENGTH: "At least 3 characters are required",
  NAME_INVALID: "Not a valid name",
  EMAIL_INVALID: "Not a valid email",
  PHONE_INVALID: "Not a valid phone number",
  MESSAGE_MAX_LENGTH: "Not more than 250 characters",
  MESSAGE_MIN_LENGTH: "At least 5 characters are required",
};

const ContactMe = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<contactData>({ mode: "onChange" });
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openFailureAlert, setOpenFailureAlert] = useState(false);

  const MessageSuccessAlert = () => {
    return (
      <Dialog
        open={openSuccessAlert}
        onClose={() => {
          setOpenSuccessAlert(false);
        }}
      >
        <DialogContent>
          <Alert severity="success">
            <FormattedMessage id="message_success"></FormattedMessage>
          </Alert>
        </DialogContent>
      </Dialog>
    );
  };
  const MessageFailureAlert = () => {
    return (
      <Dialog
        open={openFailureAlert}
        onClose={() => setOpenFailureAlert(false)}
      >
        <DialogContent>
          <Alert severity="error">
            <FormattedMessage id="message_failure"></FormattedMessage>
          </Alert>
        </DialogContent>
      </Dialog>
    );
  };

  const onSubmit = async (data: contactData) => {
    try {
      await fetch("https://web-site-email.herokuapp.com/incoming_messages", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      throw new Error();
    }
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpenFormDialog(true)}>
        <FontAwesomeIcon icon={faEnvelopeOpen} color="#000" />
        <Box
          sx={{
            ml: 1,
            display: { xs: "none", md: "flex", textTransform: "none" },
          }}
        >
          <FormattedMessage id="contact_me" />
        </Box>
      </Button>

      <Dialog
        open={openFormDialog}
        onClose={() => {
          setOpenFormDialog(false);
        }}
      >
        <DialogContent>
          <FormControl
            component="form"
            onSubmit={(e) => handleSubmit(onSubmit)(e)}
            fullWidth
            margin="dense"
            sx={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{
                required: { value: true, message: ERROR_MESSAGES.REQUIRED },
                minLength: {
                  value: 2,
                  message: ERROR_MESSAGES.NAME_MIN_LENGTH,
                },
                pattern: {
                  message: "Not a Valid Name",
                  value: REGEX.personalName,
                },
              }}
              render={({ field }) => (
                <TextField
                  type="text"
                  id="Name"
                  label={<FormattedMessage id="name" />}
                  maxRows="1"
                  helperText={errors.name ? `${errors.name?.message}` : " "}
                  {...field}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: { message: ERROR_MESSAGES.REQUIRED, value: true },
                pattern: {
                  value: REGEX.email,
                  message: ERROR_MESSAGES.EMAIL_INVALID,
                },
              }}
              render={({ field }) => (
                <TextField
                  type="email"
                  id="Email"
                  label={<FormattedMessage id="email" />}
                  maxRows="1"
                  helperText={errors.email ? `${errors.email?.message}` : " "}
                  {...field}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              rules={{
                pattern: {
                  value: REGEX.phone,
                  message: ERROR_MESSAGES.PHONE_INVALID,
                },
              }}
              render={({ field }) => (
                <TextField
                  type="tel"
                  id="phone"
                  placeholder="optional"
                  label={<FormattedMessage id="phone" />}
                  maxRows="1"
                  helperText={errors.phone ? `${errors.phone?.message}` : " "}
                  {...field}
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              defaultValue=""
              rules={{
                required: { value: true, message: ERROR_MESSAGES.REQUIRED },
                max: {
                  value: 250,
                  message: ERROR_MESSAGES.MESSAGE_MAX_LENGTH,
                },
                min: { value: 5, message: ERROR_MESSAGES.MESSAGE_MIN_LENGTH },
              }}
              render={({ field }) => (
                <TextField
                  type="message"
                  id="Message"
                  label={<FormattedMessage id="message" />}
                  multiline
                  helperText={
                    errors.message ? `${errors.message?.message}` : " "
                  }
                  {...field}
                />
              )}
            />
            <DialogActions>
              <Button
                type="submit"
                onClick={
                  isDirty && isValid
                    ? () => {
                        setOpenSuccessAlert(true);
                        setOpenFormDialog(false);
                        reset();
                      }
                    : () => {
                        setOpenFailureAlert(true);
                      }
                }
              >
                {<FormattedMessage id="submit" />}
              </Button>

              <Button
                onClick={() => {
                  setOpenFormDialog(false);
                }}
              >
                <FormattedMessage id="cancel" />
              </Button>
            </DialogActions>
          </FormControl>
        </DialogContent>
      </Dialog>
      <MessageSuccessAlert />
      <MessageFailureAlert />
    </>
  );
};
export default ContactMe;
