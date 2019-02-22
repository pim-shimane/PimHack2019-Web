import React from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';

function Header() {
  const [modal, toggle] = React.useState(false)

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-light mb-3">
      <div className="container">
        <a href="https://pim-shimane.com/">
          <img src="/images/pimlogo.png" height="40px" alt="" />
        </a>
        <MDBContainer style={{ color: 'black', width: '250px', margin: 0, padding: 0 }}>
        <MDBBtn onClick={() => toggle(!modal)}>単位情報のダウンロード手順</MDBBtn>
        <MDBModal isOpen={modal} toggle={() => toggle(!modal)} centered size="lg">
          <MDBModalHeader toggle={() => toggle(!modal)}>単位情報のダウンロード手順</MDBModalHeader>
          <MDBModalBody>
            <img src="/images/download-data.png" width="100%" alt="" />
          </MDBModalBody>
          <div>
            <ol>
              <li style={{ textAlign: 'left', fontSize: '16px' }}>
                学務情報システムにログインする（https://gakumuweb.shimane-u.ac.jp/shinwa/campus/）
              </li>
              <li style={{ textAlign: 'left', fontSize: '16px' }}>
                成績管理／単位修得状況参照を開く
              </li>
              <li style={{ textAlign: 'left', fontSize: '16px' }}>
                表示範囲は「過去の全成績」、出力先は「ファイル」にチェックを入れる
              </li>
              <li style={{ textAlign: 'left', fontSize: '16px' }}>
                「表示」ボタンを押す
              </li>
            </ol>
          </div>
        </MDBModal>
      </MDBContainer>
      </div>
    </nav>
  )
}

export default Header;
