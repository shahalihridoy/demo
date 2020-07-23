import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  selectedButton: {
    color: palette.primary.main,
    borderBottom: `1px solid ${palette.primary.main}`,
    padding: "0.25rem 1.5rem",
    transition: "all 250ms ease",
  },
  normalButton: {
    color: palette.text.secondary,
    borderBottom: `1px solid ${palette.text.secondary}`,
    padding: "0.25rem 1.5rem",
    transition: "all 250ms ease",
  },
  closeIcon: {
    position: "absolute",
    right: "1rem",
    top: "1rem",
    cursor: "pointer",
  },
}));

const ProfileCreator = ({ closeDialog, profile = {}, ...props }) => {
  const [formData, setFormData] = useState({ ...profile });
  const [tabIndex, setTabIndex] = useState(0);
  const classes = useStyles();

  const handleChange = ({ target: { name, value } }) => {
    let temp = formData;
    formData[name] = value;
    setFormData(temp);
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="p-6 max-w-360">
      <div className="flex justify-between">
        {["Shipping", "Billing", "Payment"].map((item, ind) => (
          <Button
            key={ind}
            variant="text"
            className={
              tabIndex === ind ? classes.selectedButton : classes.normalButton
            }
            onClick={() => setTabIndex(ind)}
          >
            {item}
          </Button>
        ))}
      </div>
      <form>
        {tabIndex === 0 && (
          <div className="shipping-details w-full">
            <TextField
              className="my-6"
              size="small"
              variant="outlined"
              label="Name"
              name="shipping_name"
              defaultValue={formData.shipping_name}
              fullWidth
              onChange={handleChange}
            />
            <TextField
              className="mb-6"
              size="small"
              variant="outlined"
              label="Contact No"
              name="shipping_contact"
              defaultValue={formData.shipping_contact}
              fullWidth
              onChange={handleChange}
            />
            <TextField
              className="mb-6"
              size="small"
              variant="outlined"
              label="Address"
              name="shipping_address"
              defaultValue={formData.shipping_address}
              fullWidth
              onChange={handleChange}
            />
          </div>
        )}

        {tabIndex === 1 && (
          <div className="shipping-details w-full">
            <TextField
              className="my-6"
              size="small"
              variant="outlined"
              label="Name"
              name="billing_name"
              defaultValue={formData.billing_name}
              fullWidth
              onChange={handleChange}
            />
            <TextField
              className="mb-6"
              size="small"
              variant="outlined"
              label="Contact No"
              name="billing_contact"
              defaultValue={formData.billing_contact}
              fullWidth
              onChange={handleChange}
            />
            <TextField
              className="mb-6"
              size="small"
              variant="outlined"
              label="Address"
              name="billing_address"
              defaultValue={formData.billing_address}
              fullWidth
              onChange={handleChange}
            />
          </div>
        )}
        {tabIndex === 2 && (
          <div className="shipping-details w-full">
            <TextField
              className="my-6"
              size="small"
              variant="outlined"
              label="Profile Name"
              name="profile_name"
              defaultValue={formData.profile_name}
              fullWidth
              onChange={handleChange}
            />
            <TextField
              className="mb-6"
              size="small"
              variant="outlined"
              label="Card Number"
              name="card_no"
              defaultValue={formData.card_no}
              fullWidth
              onChange={handleChange}
            />
            <div className="flex">
              <TextField
                className="flex-grow mb-6 mr-6"
                size="small"
                variant="outlined"
                label="Exp. Date"
                name="expires"
                placeholder="11/20"
                onChange={handleChange}
                inputProps={{ maxLength: 5 }}
                defaultValue={formData.expires}
              />
              <TextField
                className="flex-grow mb-6"
                size="small"
                variant="outlined"
                label="CVV"
                name="cvv"
                onChange={handleChange}
                defaultValue={formData.cvv}
              />
            </div>
          </div>
        )}

        <div className="w-full text-center mt-2">
          <Button
            variant="text"
            className="text-muted mr-4 px-5"
            onClick={closeDialog}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className="text-inherit"
            onClick={handleSubmit}
          >
            Save Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileCreator;
