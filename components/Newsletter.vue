<template>
  <div id="newsletter">
    <div class="sib-form">
      <div id="sib-form-container" class="sib-form-container">
        <div
          id="sib-container"
          class="sib-container--large sib-container--vertical"
        >
          <form
            id="sib-form"
            method="POST"
            action="https://3a9f4d41.sibforms.com/serve/MUIEAAAA39jjSlTavM0Xb0k8aG2VJU3JoQ27yN_871e880F6AmfMXtWVQ2bZDgAYk1r5vuYf2nUue2-DIH1rhx0fRhq-I2fkAdtUWcU6cUkbj_riifGHb_w58YMi5RhgrpFBkv1By2PE2wKBqs6LmUFLogHydTcmFv4Tkaukp9Y7JVQ90kZioaPxAfysWe9mc2AxGxNhmtJdtXbP"
          >
            <input
              class="input"
              type="text"
              id="EMAIL"
              name="EMAIL"
              autocomplete="off"
              placeholder="E-Mail"
              data-required="true"
              required
            />
            <div>
              <label>
                <input
                  type="checkbox"
                  class="input_replaced"
                  value="1"
                  id="OPT_IN"
                  name="OPT_IN"
                />
                <span class="checkbox"></span>
                <p>
                  Ich möchte Ihren Newsletter erhalten und akzeptiere die
                  Datenschutzerklärung. Sie können den Newsletter jederzeit über
                  den Link in unserem Newsletter abbestellen.
                </p>
              </label>
            </div>
            <button
              class="sib-form-block__button sib-form-block__button-with-loader"
              form="sib-form"
              type="submit"
            >
              Anmelden
            </button>
            <input
              type="hidden"
              name="email_address_check"
              value=""
              class="input--hidden"
            />
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
  input[type="text"] {
    padding: 12px 20px;
    border: 3px solid #fff;
    border-radius: 10px;
    margin: 40px auto 0;
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
        color: #fca58d !important;
      }
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

    input ~ .checkbox {
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

    input:checked ~ .checkbox {
      background: #fff;
      &:after {
        color: #fca58d;
      }
    }
  }
  button {
    margin: 0;
  }
}
</style>
