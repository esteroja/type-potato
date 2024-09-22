import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import React, { FormEvent, useEffect, useState } from "react"

export default function MyInfo() {
  const [info, setInfo] = useState({ email: "", message: "" })

  const hobbies = [
    { id: 1, name: "hüppamine" },
    { id: 2, name: "jooksmine" },
    { id: 3, name: "mängimine" },
  ]

  const logInfo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log("Submitted form", info)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value

    setInfo({ ...info, [name]: value })
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginTop: "50px",
      }}
    >
      <Stack gap={2}>
        <Typography component={"span"}>Nimi: Ester</Typography>
        <Typography component={"span"}>
          Hobid:
          <ol>
            {hobbies.map(element => (
              <li key={element.id}>{element.name}</li>
            ))}
          </ol>
        </Typography>
        <form
          className="form"
          onSubmit={logInfo}
        >
          <Stack gap={2}>
            <TextField
              name="email"
              id="outlined-basic"
              label="email"
              onChange={handleChange}
            ></TextField>
            <TextField
              name="message"
              id="outlined-basic"
              label="sõnum"
              onChange={handleChange}
            ></TextField>
            <Button
              variant="contained"
              type="submit"
              sx={{ bgcolor: "lightcoral" }}
            >
              Saada
            </Button>
          </Stack>
        </form>
      </Stack>
    </Box>
  )
}
