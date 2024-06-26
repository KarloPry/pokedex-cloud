"use client";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";
export default function TextInputs() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const types = [
    {
      value: "FIRE",
      label: "Fuego",
    },
    {
      value: "WATER",
      label: "Agua",
    },
    {
      value: "GRASS",
      label: "Planta",
    },
    {
      value: "ELECTRIC",
      label: "Eléctrico",
    },
    {
      value: "FIGHTING",
      label: "Lucha",
    },
    {
      value: "POISON",
      label: "Veneno",
    },
    {
      value: "GROUND",
      label: "Tierra",
    },
    {
      value: "ICE",
      label: "Hielo",
    },
    {
      value: "DRAGON",
      label: "Dragón",
    },
    {
      value: "NORMAL",
      label: "Normal",
    },
    {
      value: "GHOST",
      label: "Fantasma",
    },
    {
      value: "PSYCHIC",
      label: "Psíquico",
    },
    {
      value: "BUG",
      label: "Bicho",
    },
    {
      value: "ROCK",
      label: "Roca",
    },
    {
      value: "FAIRY",
      label: "Hada",
    },
    {
      value: "PSYCHIC",
      label: "Psíquico",
    },
  ];
  return (
    <>
      <Input
        id="name"
        variant="bordered"
        label="Nombre del pokemon"
        {...register("name", {
          required: true,
        })}
        required={true}
        minLength={1}
        errorMessage={"El nombre es requerido"}
      />
      <Input
        id="hp"
        variant="bordered"
        type="number"
        label="HP del pokemon"
        {...register("HP", {
          required: true,
          max: 255,
        })}
        min={1}
        max={255}
        errorMessage={"El HP debe ser máximo 255"}
        required={true}
      />
      <Input
        id="attack"
        variant="bordered"
        type="number"
        label="Ataque del pokemon"
        {...register("Attack", {
          required: true,
          max: 255,
        })}
        min={1}
        max={255}
        errorMessage={"El ataque debe ser máximo 255"}
        required={true}
      />
      <Input
        id="defense"
        variant="bordered"
        type="number"
        label="Defensa del pokemon"
        {...register("Defense", {
          required: true,
          max: 255,
        })}
        min={1}
        max={255}
        required={true}
      />
      <Input
        id="sp_atk"
        variant="bordered"
        type="number"
        label="Ataque Especial del pokemon"
        {...register("Sp_Atk", {
          required: true,
          max: 255,
        })}
        max={255}
        min={1}
        required={true}
      />
      <Input
        id="sp_def"
        variant="bordered"
        type="number"
        label="Defensa Especial del pokemon"
        {...register("Sp_Def", {
          required: true,
          max: 255,
        })}
        max={255}
        min={1}
        required={true}
      />
      <Input
        id="speed"
        variant="bordered"
        type="number"
        label="Velocidad del pokemon"
        {...register("Speed", {
          required: true,
          max: 255,
        })}
        max={255}
        min={1}
        required={true}
      />
      <Select
        id="selectType"
        label="Selecciona el tipo"
        className="max-w-xs"
        {...register("type")}
      >
        {types.map((type, index) => (
          <SelectItem id={index.toString()} key={type.value} value={type.value}>
            {type.label}
          </SelectItem>
        ))}
      </Select>
      <Button id="save" type="submit" color="success">
        Guardar nuevo pokemon
      </Button>
    </>
  );
}
