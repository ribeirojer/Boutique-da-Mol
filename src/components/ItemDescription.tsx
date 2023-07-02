import React, { useState } from "react";
import Button from "./Button";

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
  console.log(itemToShow);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center mb-4 gap-4">
        <a
          className={`nav-item nav-link ${
            activeTab === "tab-pane-1" ? "active" : ""
          }`}
          onClick={() => handleTabClick("tab-pane-1")}
        >
          Descrição
        </a>
        <a
          className={`nav-item nav-link ${
            activeTab === "tab-pane-2" ? "active" : ""
          }`}
          onClick={() => handleTabClick("tab-pane-2")}
        >
          Informações
        </a>
        <a
          className={`nav-item nav-link ${
            activeTab === "tab-pane-3" ? "active" : ""
          }`}
          onClick={() => handleTabClick("tab-pane-3")}
        >
          Avaliações ({itemToShow?.reviews?.length})
        </a>
      </div>
      <div className="tab-content">
        {activeTab === "tab-pane-1" && (
          <div className="tab-pane fade show active" id="tab-pane-1">
            <h4 className="mb-3">Descrição do Produto</h4>
            <p>{itemToShow?.description}</p>
          </div>
        )}

        {activeTab === "tab-pane-2" && (
          <div className="tab-pane fade" id="tab-pane-2">
            <h4 className="mb-3">Additional Information</h4>
            <p>{itemToShow?.additionalInfo}</p>
          </div>
        )}

        {activeTab === "tab-pane-3" && (
          <div className="flex" id="tab-pane-3">
            <div className="col-md-6">
              <h4 className="mb-4">
                {itemToShow?.reviews.length} Avaliações para "{itemToShow?.name}
                "
              </h4>
              {itemToShow?.reviews.map((review: any) => (
                <div className="media mb-4">
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
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <p>{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-6">
              <h4 className="mb-4">Deixe um comentário</h4>
              <small>
                Seu endereço de e-mail não será publicado. Os campos
                obrigatórios estão marcados *
              </small>
              <div className="d-flex my-3">
                <p className="mb-0 mr-2">Sua avaliação *:</p>
                <div className="text-primary">
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <form>
                <div className="form-group">
                  <label htmlFor="message">Sua revisão *</label>
                  <textarea
                    id="message"
                    cols={30}
                    rows={5}
                    className="form-control"
                    value={reviewText}
                    onChange={handleReviewTextChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Seu nome *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Seu email *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
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
