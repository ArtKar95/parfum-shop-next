import React from "react";
import { Modal } from "antd";
// import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRenderModal } from "../../../../services/actions/homepage__stable";

const RenderModal = ({ isModalVisible, setIsModalVisible }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRenderModal());
  }, []);

  const newsReports = useSelector((state) => state.navbar.renderModalData);
  
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title={newsReports?.title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1200}
      wrapClassName={"on__render__modal"}
      footer={null}
    >
      <div className={"render__modal__content"}>
        <p className={"render__modal__content__toptxt"}>
          {newsReports?.subtitle}
        </p>
        <div className={"render__modal__content__img"}>
          <img src={newsReports?.images?.url} alt="/anzeige-final.jpg" />
        </div>
        <div className={"render__modal__content__subscribe"}>
          <form action="#">
            <div className={"email__subscription__popup"}>
              <input type="text" placeholder={"Email adresse"} />
              <button type="submit">Jetzt anmelden</button>
            </div>
            <div className={"privacy_popup container"}>
              <input type="checkbox" />
              <span className="checkmark"></span>
              <label htmlFor="privacy">
                {newsReports?.privacy}
                {/* Hiermit bestätige ich, dass ich die{" "}
                <span>Daten­schutz­erklärung</span> gelesen habe *. */}
              </label>
            </div>
          </form>
        </div>
        <div className={"render__modal__content__bottom"}>
          <p>{newsReports?.text_1}</p>
          <p>{newsReports?.text_2}</p>
        </div>
      </div>
      
    </Modal>
  );
};

export default React.memo(RenderModal);
