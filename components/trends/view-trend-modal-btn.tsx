"use client";
import Modal from "@/context/modal-context";
import BuyProductModalContent from "../modals/buy-product-modal-content";

function ViewTrendModalButton() {
  return (
    <Modal>
      <Modal.Open opens="buy-product-modal">
        <button className="rounded-lg font-medium px-6 text-white opacity-60 hover:opacity-80 duration-300 bg-primary py-2">
          Buy Now
        </button>
      </Modal.Open>
      <Modal.Window name="buy-product-modal" showCloseBtn>
        <BuyProductModalContent />
      </Modal.Window>
    </Modal>
  );
}

export default ViewTrendModalButton;
