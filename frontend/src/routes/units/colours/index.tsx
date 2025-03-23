import { createFileRoute, Link } from "@tanstack/react-router";
export const Route = createFileRoute("/units/colours/")({
  component: Introduction,
});

const words = [
  {
    "text": "Hello",
    "image": "https://plus.unsplash.com/premium_photo-1687203673190-d39c3719123a?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "link": "/words/hello"
  },
  {
    "text": "Hello",
    "image": "https://plus.unsplash.com/premium_photo-1687203673190-d39c3719123a?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "link": "/words/hello"
  },
  {
    "text": "Hello",
    "image": "https://plus.unsplash.com/premium_photo-1687203673190-d39c3719123a?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "link": "/words/hello"
  }
]

function Introduction() {

  return (
    <div className="p-2 mx-12">
          <h1 className="text-3xl font-bold ml-4 mt-4 mb-8">Colours</h1>

          <div className="grid grid-cols-3 gap-12">
          {
              words.map((word) => {
                return (
                  <div className="border-4 rounded-4xl">
                    <div className="flex flex-col hover:bg-yellow-100 hover:text-black rounded-2xl transition">
                      <img src={word.image} className="rounded-t-2xl"/>
                      {/* <h2 className="py-4 text-xl text-center hover:bg-yellow-100 hover:text-black cursor-pointer rounded-b-2xl transition-colors">{word.text}</h2> */}
                      <Link
                          to={word.link}
                          className="py-4 text-xl text-center  cursor-pointer rounded-b-2xl transition-colors"
                        >
                          {word.text}
                        </Link>                    
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
  );
}

export default Introduction;
