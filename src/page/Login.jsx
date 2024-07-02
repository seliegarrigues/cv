import { useState, useEffect } from "react";

export default function Login({username, password, setUsername, setPassword, handleSubmit}) {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <h2 className="text-4xl text-center mb-3 font-bold">Connexion</h2>
      <form className="w-[400px] flex flex-col gap-3"
      onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Saisir le nom d'utilisateur"
          className="input input-bordered input-primary w-full"
          aria-label="Nom d'utilisateur"
          value={username}
          onChange={setUsername}  /* on recupere la variable d'etat */
        />
        <input
          type="password"
          placeholder="Saisir le mot de passe"
          className="input input-bordered input-primary w-full"
          aria-label="Mot de passe"
          value={password}
          onChange={setPassword}
        />
        <button className="btn btn-primary">Se connecter</button>
      </form>
    </div>
  );
}
