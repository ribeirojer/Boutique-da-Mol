import React, { useState } from "react";
import Button from "./Button";
import Stars from "./Stars";
import RatingBars from "./RatingBars";

type Props = {
  itemToShow?: any;
};

const ItemDescription = ({ itemToShow }: Props) => {
  const [activeTab, setActiveTab] = useState("tab-pane-1");
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleReviewTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReviewText(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmitReview = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Fazer algo com os dados do formulário de avaliação (rating, reviewText, name, email)
  };

  const ratings = [
    { stars: 1, count: 3 },
    { stars: 2, count: 5 },
    { stars: 3, count: 10 },
    { stars: 4, count: 15 },
    { stars: 5, count: 25 },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center mb-4 space-x-4">
        <a
          className={`cursor-pointer nav-item nav-link ${
            activeTab === "tab-pane-1" ? "active font-bold" : ""
          }`}
          onClick={() => handleTabClick("tab-pane-1")}
        >
          Descrição
        </a>
        <a
          className={`cursor-pointer nav-item nav-link ${
            activeTab === "tab-pane-3" ? "active font-bold" : ""
          }`}
          onClick={() => handleTabClick("tab-pane-3")}
        >
          Avaliações ({itemToShow?.reviews?.length})
        </a>
      </div>
      <div className="tab-content">
        {activeTab === "tab-pane-1" && (
          <div className="tab-pane fade show active" id="tab-pane-1">
            <p className="mb-4 lg:max-w-4xl mx-auto">
              {itemToShow?.description}
            </p>
            <p>{itemToShow?.additionalInfo}</p>
          </div>
        )}

        {activeTab === "tab-pane-3" && (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            id="tab-pane-3"
          >
            <div className="">
              <h2>Avaliações do Produto</h2>
              <RatingBars ratings={ratings} />
            </div>

            <div className="">
              <h4 className="mb-4">
                {itemToShow?.reviews.length} Avaliações para "{itemToShow?.name}
                "
              </h4>
              {itemToShow?.reviews.map((review: any) => (
                <div className="media mb-4" key={review.id}>
                  <img
                    src="img/user.jpg"
                    alt="Image"
                    className="img-fluid mr-3 mt-1"
                    style={{ width: "45px" }}
                  />
                  <div className="media-body">
                    <h6>
                      {review.userId}
                      <small>
                        - <i>{review.createdAt.toISOString()}</i>
                      </small>
                    </h6>
                    <div className="text-primary mb-2">
                      {review.rating}
                      <Stars
                        rating={itemToShow?.review?.rating.toNumber()}
                      ></Stars>
                    </div>
                    <p>{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              <h4 className="mb-4">Deixe um comentário</h4>
              <small>
                Seu endereço de e-mail não será publicado. Os campos
                obrigatórios estão marcados *
              </small>
              <div className="flex my-3">
                <p className="mb-0 mr-2">Sua avaliação *:</p>
                <div className="text-primary">
                  <Stars rating={itemToShow?.rating}></Stars>
                </div>
              </div>
              <form onSubmit={handleSubmitReview}>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Sua revisão *
                  </label>
                  <textarea
                    id="message"
                    cols={30}
                    rows={5}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    value={reviewText}
                    onChange={handleReviewTextChange}
                    required
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Seu nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Seu email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <Button type="submit">Deixe seu comentário</Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDescription;
