import axios from "axios";

export const setUpProfileThunk =
  ({ user_id, fname, lname, bio, image, extension }) =>
  async () => {
    if (image) {
      let img_name = `${user_id}_${new Date().getTime()}.${extension}`;
      await axios.post(
        `${import.meta.env.VITE_BACKEND}/setprofile`,
        {
          user_id,
          fname,
          lname,
          bio,
          img_name,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      );
      await axios.post(
        `${import.meta.env.VITE_BACKEND}/setavatar/${img_name}`,
        image,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      );
    } else {
      await axios.post(
        `${import.meta.env.VITE_BACKEND}/setprofile`,
        {
          user_id,
          fname,
          lname,
          bio,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      );
    }
  };

export const setUpInstitutionProfileThunk =
  ({ user_id, name, url, bio, image, extension }) =>
  async () => {
    if (image) {
      let img_name = `${user_id}_${new Date().getTime()}.${extension}`;
      await axios.post(
        `${import.meta.env.VITE_BACKEND}/institution/setprofile`,
        {
          institution_id: user_id,
          name,
          url,
          bio,
          img_name,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      );
      await axios.post(
        `${import.meta.env.VITE_BACKEND}/institution/setbanner/${img_name}`,
        image,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      );
    } else {
      await axios.post(
        `${import.meta.env.VITE_BACKEND}/institution/setprofile`,
        {
          institution_id: user_id,
          name,
          url,
          bio,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      );
    }
  };

export const updateProfileThunk =
  ({ user_id, fname, lname, bio, image, extension }) =>
  async () => {
    if (image) {
      let img_name = `${user_id}_${new Date().getTime()}.${extension}`;
      await axios.delete(`${import.meta.env.VITE_BACKEND}/avatar/${user_id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
      });

      await axios.put(
        `${import.meta.env.VITE_BACKEND}/profile/${user_id}`,
        {
          fname,
          lname,
          bio,
          img_name,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      );

      await axios.post(
        `${import.meta.env.VITE_BACKEND}/setavatar/${img_name}`,
        image,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      );
    } else {
      await axios.put(
        `${import.meta.env.VITE_BACKEND}/profile/${user_id}`,
        {
          fname,
          lname,
          bio,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      );
    }
  };

export const updateInstitutionProfileThunk =
  ({ institution_id, name, url, bio, image, extension }) =>
  async () => {
    if (image) {
      let img_name = `${user_id}_${new Date().getTime()}.${extension}`;
      await axios.delete(
        `${import.meta.env.VITE_BACKEND}/institution/avatar/${institution_id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      );
      await axios.put(
        `${import.meta.env.VITE_BACKEND}/institution/profile/${institution_id}`,
        {
          name,
          url,
          bio,
          img_name,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      );

      await axios.post(
        `${import.meta.env.VITE_BACKEND}/institution/setbanner/${img_name}`,
        image,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      );
    } else {
      await axios.put(
        `${import.meta.env.VITE_BACKEND}/institution/profile/${institution_id}`,
        {
          name,
          url,
          bio,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      );
    }
  };
