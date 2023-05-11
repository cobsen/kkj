<template>
  <div id="newsletter">
    <div class="sib-form">
      <div id="sib-form-container" class="sib-form-container">
        <div id="sib-container" class="sib-container--large sib-container--vertical">
          <form id="sib-form" method="POST"
            action="https://3a9f4d41.sibforms.com/serve/MUIEABILml20CIoyT1X6peOMMDKSUhnMRMey9uQENiIWgD5KC3gr6OzT294ztWoQgmofNNXLjT7_qeCxPPUNk-bNss-4KgOiE33P6E3X4ALeYcUZno0tZoggz_586xAYVl7xSJU0LX5E-sWhsHp_ojPXmGOek7oLZmvhjovdA1a3e35oXm2AMVZc0bH8PKp1Mki0w2AnrAB3C4Dt">
            <div class="form-line">
              <input class="input" maxlength="200" type="text" id="VORNAME" name="VORNAME" autocomplete="off"
                placeholder="Vorname" data-required="true" required />
              <input class="input" maxlength="200" type="text" id="NACHNAME" name="NACHNAME" autocomplete="off"
                placeholder="Nachname" data-required="true" required />
            </div>
            <div class="form-line">
              <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="E-Mail"
                data-required="true" required />
            </div>
            <div class="form-line">
              <input type="tel" class="input" id="TELEFON" name="TELEFON" autocomplete="off" placeholder="Telefonnummer"
                data-required="true" required />
            </div>
            <div class="form-line">
              <input class="input" maxlength="200" type="text" id="MEDIUM" name="MEDIUM" autocomplete="off"
                placeholder="Dein Medium" />
            </div>
            <div class="form-line">
              <label>
                <input type="checkbox" class="input_replaced" value="1" id="OPT_IN" name="OPT_IN" />
                <span class="checkbox"></span>
                <p>
                  Ich möchte den KKJ23-Newsletter erhalten und akzeptiere die <a
                    href="/datenschutz">Datenschutzerklärung</a>. Der Newsletter kann
                  jederzeit abbestellt werden.
                </p>
              </label>
            </div>
            <button class="sib-form-block__button sib-form-block__button-with-loader" form="sib-form" type="submit">
              Anmelden
            </button>
            <input type="hidden" name="email_address_check" value="" class="input--hidden" />
            <input type="hidden" name="locale" value="de" />
            <input type="hidden" name="html_type" value="simple" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#newsletter {
  margin: 40px 0;
}

#sib-container input:-ms-input-placeholder {
  text-align: left;
  font-family: "Space Grotesk", sans-serif;
  color: #c0ccda;
}

#sib-container input::placeholder {
  text-align: left;
  font-family: "Space Grotesk", sans-serif;
  color: #c0ccda;
}

.entry__field,
.sib-form-block {
  text-align: center;
}

form {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .form-line {
    margin: 40px auto 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  input[type="text"],
  input[type="tel"] {
    padding: 12px 20px;
    border: 3px solid #fff;
    border-radius: 10px;
    background: transparent;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    width: 100%;
    box-sizing: border-box;
    font-size: 17px;

    &::placeholder {
      color: rgba(#fff, 0.4) !important;
    }

    &:focus,
    &:focus-within,
    &:focus-visible {
      outline: none;
      background: rgba(#fff, 0.4);

      &::placeholder {
        color: #fff !important; //#fca58d !important;
      }
    }

    &#VORNAME,
    &#NACHNAME {
      width: calc(50% - 20px);
    }
  }

  div label {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    input {
      margin-right: 24px;
      height: 24px;
      width: 24px;
      display: none;
    }

    input~.checkbox {
      display: block;
      z-index: 5;
      position: relative;
      flex: 0 0 auto;
      border: 3px solid #fff;
      border-radius: 10px;
      margin-right: 24px;
      height: 24px;
      width: 24px;
      transition: 0.2s;

      &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: "X";
        color: transparent;
        font-family: "Space Grotesk", sans-serif;
        font-weight: bold;
      }
    }

    input:checked~.checkbox {
      background: rgba(#fff, 0.4); //#fff;

      &:after {
        color: #fff; //#fca58d;
      }
    }
  }

  button {
    margin: 0;
  }

  a {
    color: #fff;
    font-weight: 600;

    &:after {
      display: inline-block;
      content: "↗";
      font-weight: 400;
      text-decoration: underline;
    }
  }
}
</style>
