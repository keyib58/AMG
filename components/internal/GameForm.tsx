"use client";

import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useRouter } from "next/navigation";

type LanguageInfo = {
  language: string;
  trailerLink: string;
  demoLink: string;
};

type Tag = {
  name: string;
};

type FormData = {
  id?: string;
  name: string;
  thumbnailUrl: string;
  description: string;
  gameBackgroundUrl: string;
  gameGifUrl: string;
  gameType: string;
  RTP: number;
  genre: string;
  volatility: string;
  maxWin: number;
  placeHolderUrl: string;
  popularRank: number;
  releaseDate: string;
  status: string;
  slug: string; // Add slug field
  languageInfo: LanguageInfo[];
  tags: Tag[];
};

export default function GameForm() {
  const { register, handleSubmit, reset, control, watch, setValue } = useForm<FormData>({
    defaultValues: {
      languageInfo: [{ language: "", trailerLink: "", demoLink: "" }],
      tags: [{ name: "" }],
    },
  });

  const { fields: languageFields, append: appendLanguage, remove: removeLanguage } = useFieldArray({
    control,
    name: "languageInfo",
  });

  const { fields: tagFields, append: appendTag, remove: removeTag } = useFieldArray({
    control,
    name: "tags",
  });

  const [message, setMessage] = useState("");
  const [games, setGames] = useState<FormData[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [editingGame, setEditingGame] = useState<FormData | null>(null);
  const router = useRouter();

  const fetchGames = async () => {
    try {
      const response = await fetch("/api/games");
      const data = await response.json();
      setGames(data);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const onSubmit = async (data: FormData) => {
    const method = editingGame ? "PUT" : "POST";
    const url = editingGame ? `/api/games/${editingGame.id}` : "/api/games";
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        RTP: parseFloat(data.RTP.toString()),
        maxWin: parseFloat(data.maxWin.toString()),
        popularRank: parseInt(data.popularRank.toString(), 10),
      }),
    });

    if (response.ok) {
      alert(editingGame ? "Game updated successfully!" : "Game created successfully!");
      reset();
      setEditMode(false);
      setEditingGame(null);
      fetchGames(); // Refresh the list of games after creating or updating
    } else {
      alert("Failed to create/update game.");
    }
  };

  const startEditing = (game: FormData) => {
    setEditMode(true);
    setEditingGame(game);
    // Set form values to the game being edited
    Object.keys(game).forEach((key) => {
      setValue(key as keyof FormData, game[key as keyof FormData]);
    });
    setMessage("");
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setEditingGame(null);
    reset();
    setMessage("");
  };

  // Watch input values for previews
  const thumbnailUrl = watch("thumbnailUrl");
  const gameBackgroundUrl = watch("gameBackgroundUrl");
  const gameGifUrl = watch("gameGifUrl");
  const placeHolderUrl = watch("placeHolderUrl");

  return (
    <div className="space-y-4 text-white bg-black p-6 rounded-lg">
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={toggleEditMode}
      >
        {editMode ? "Add Game" : "Edit Game"}
      </button>

      {editMode && !editingGame ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Edit Games</h2>
          <ul>
            {games.map((game) => (
              <li key={game.id} className="mb-4">
                <div className="flex justify-between items-center">
                  <span>{game.name}</span>
                  <button
                    className="bg-green-500 text-white p-2 rounded-md"
                    onClick={() => startEditing(game)}
                  >
                    Edit
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {(editMode && editingGame) || (!editMode && !editingGame) ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input {...register("name")} required className="w-full p-2 bg-gray-800 rounded-md text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Thumbnail URL</label>
            <input {...register("thumbnailUrl")} required className="w-full p-2 bg-gray-800 rounded-md text-white" />
            {thumbnailUrl && <img src={thumbnailUrl} alt="Thumbnail Preview" className="mt-2 rounded-md" />}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea {...register("description")} required className="w-full p-2 bg-gray-800 rounded-md text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Game Background URL</label>
            <input {...register("gameBackgroundUrl")} required className="w-full p-2 bg-gray-800 rounded-md text-white" />
            {gameBackgroundUrl && <img src={gameBackgroundUrl} alt="Background Preview" className="mt-2 rounded-md" />}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Game Gif URL</label>
            <input {...register("gameGifUrl")} required className="w-full p-2 bg-gray-800 rounded-md text-white" />
            {gameGifUrl && <img src={gameGifUrl} alt="Gif Preview" className="mt-2 rounded-md" />}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Game Type</label>
            <input {...register("gameType")} required className="w-full p-2 bg-gray-800 rounded-md text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">RTP</label>
            <input type="number" step="0.01" {...register("RTP")} required className="w-full p-2 bg-gray-800 rounded-md text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Genre</label>
            <input {...register("genre")} required className="w-full p-2 bg-gray-800 rounded-md text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Volatility</label>
            <input {...register("volatility")} required className="w-full p-2 bg-gray-800 rounded-md text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Max Win</label>
            <input type="number" step="0.01" {...register("maxWin")} required className="w-full p-2 bg-gray-800 rounded-md text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Placeholder URL</label>
            <input {...register("placeHolderUrl")} required className="w-full p-2 bg-gray-800 rounded-md text-white" />
            {placeHolderUrl && <img src={placeHolderUrl} alt="Placeholder Preview" className="mt-2 rounded-md" />}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Popular Rank</label>
            <input type="number" {...register("popularRank")} required className="w-full p-2 bg-gray-800 rounded-md text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Release Date</label>
            <input {...register("releaseDate")} required className="w-full p-2 bg-gray-800 rounded-md text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select {...register("status")} className="w-full p-2 bg-gray-800 rounded-md text-white">
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Slug</label>
            <input {...register("slug")} required className="w-full p-2 bg-gray-800 rounded-md text-white" />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium mb-1">Language Info</label>
            {languageFields.map((field, index) => (
              <div key={field.id} className="space-y-2">
                <input {...register(`languageInfo.${index}.language`)} placeholder="Language" className="w-full p-2 bg-gray-800 rounded-md text-white" />
                <input {...register(`languageInfo.${index}.trailerLink`)} placeholder="Trailer Link" className="w-full p-2 bg-gray-800 rounded-md text-white" />
                <input {...register(`languageInfo.${index}.demoLink`)} placeholder="Demo Link" className="w-full p-2 bg-gray-800 rounded-md text-white" />
                <button type="button" onClick={() => removeLanguage(index)} className="bg-red-500 text-white p-2 rounded-md">Remove</button>
              </div>
            ))}
            <button type="button" onClick={() => appendLanguage({ language: "", trailerLink: "", demoLink: "" })} className="bg-blue-500 text-white p-2 rounded-md">Add Language Info</button>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium mb-1">Tags</label>
            {tagFields.map((field, index) => (
              <div key={field.id} className="space-y-2">
                <input {...register(`tags.${index}.name`)} placeholder="Tag" className="w-full p-2 bg-gray-800 rounded-md text-white" />
                <button type="button" onClick={() => removeTag(index)} className="bg-red-500 text-white p-2 rounded-md">Remove</button>
              </div>
            ))}
            <button type="button" onClick={() => appendTag({ name: "" })} className="bg-blue-500 text-white p-2 rounded-md">Add Tag</button>
          </div>

          <button type="submit" className="bg-green-500 text-white p-2 rounded-md">
            {editingGame ? "Update Game" : "Create Game"}
          </button>
          {message && <p className="text-red-500">{message}</p>}
        </form>
      ) : null}
    </div>
  );
}
