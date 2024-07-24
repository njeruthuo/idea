import { useState } from "react";
import { useUser } from "../lib/context/context";
import { useIdeas } from "../lib/context/ideas";

export function Home() {
  const user = useUser();
  const ideas = useIdeas();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function add(id, desc) {
    ideas.add(id, desc);
    setTitle("");
    setDescription("");
  }

  return (
    <main className="w-[75%] mx-auto border-r-2 border-l-2 px-12 pt-12 pb-24">
      {/* Show the submit form to logged in users. */}
      {user?.current ? (
        <section>
          <h2 className="text-md mb-4">Submit an idea</h2>
          <form className="flex space-y-4 flex-col">
            <input
              className="border py-1 px-3 rounded-md"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <textarea
              className="border py-1 px-3 rounded-md"
              placeholder="Description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <button
              className="bg-gray-600 text-white py-2 rounded-xl"
              type="button"
              onClick={() =>
                add({ userId: user?.current.$id, title, description })
              }
            >
              Submit
            </button>
          </form>
        </section>
      ) : (
        <section>
          <p>Please login to submit an idea.</p>
        </section>
      )}
      <section className="mt-4">
        {ideas ? (
          <h2 className="underline font-bold text-lg mb-4">Latest Ideas</h2>
        ) : (
          ""
        )}

        <ul>
          {ideas?.current.map((idea) => (
            <li className="list-disc" key={idea.$id}>
              <p className="font-bold">{idea.title}</p>
              <p className="font-light">{idea.description}</p>
              {/* Show the remove button to idea owner. */}
              {user?.current && user?.current.$id === idea?.userId && (
                <button
                  className="bg-gray-600 text-white py-1 px-4 rounded-xl"
                  type="button"
                  onClick={() => ideas.remove(idea.$id)}
                >
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
