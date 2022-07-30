import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

export default function Add() {
  const [open, setOpen] = useState(false);

  const CustomModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    gap: "10px",
    marginBottom: "20px",
  });

  return (
    <>
      <Tooltip
        title="Add"
        onClick={(e) => setOpen(!open)}
        sx={{
          position: "fixed",
          bottom: 20,
          left: {
            xs: "calc(50% - 25px)",
            md: 30,
          },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <CustomModal
        open={open}
        onClose={(e) => setOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={250}
          bgcolor={"background.default"}
          color="text.primary"
          borderRadius={3}
          p={3}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726__340.jpg"
            />
            <Typography variant="span" color="gray" fontWeight={500}>
              Jane Doe
            </Typography>
          </UserBox>

          <TextField
            id="standard-multiline-static"
            sx={{ width: "100%" }}
            multiline
            rows={3}
            placeholder="Whats you got?  "
            variant="standard"
          />

          <Stack direction="row" mt={2} gap={1}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>

          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
            sx={{ marginTop: "10px" }}
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </CustomModal>
    </>
  );
}
