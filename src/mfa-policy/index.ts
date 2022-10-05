// https://www.terraform.io/docs/providers/okta/r/mfa_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MfaPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Policy Description
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#description MfaPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#duo MfaPolicy#duo}
  */
  readonly duo?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#external_idp MfaPolicy#external_idp}
  */
  readonly externalIdp?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_u2f MfaPolicy#fido_u2f}
  */
  readonly fidoU2F?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_webauthn MfaPolicy#fido_webauthn}
  */
  readonly fidoWebauthn?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#google_otp MfaPolicy#google_otp}
  */
  readonly googleOtp?: { [key: string]: string };
  /**
  * List of Group IDs to Include
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#groups_included MfaPolicy#groups_included}
  */
  readonly groupsIncluded?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#hotp MfaPolicy#hotp}
  */
  readonly hotp?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#id MfaPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#is_oie MfaPolicy#is_oie}
  */
  readonly isOie?: boolean | cdktf.IResolvable;
  /**
  * Policy Name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#name MfaPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_call MfaPolicy#okta_call}
  */
  readonly oktaCall?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_email MfaPolicy#okta_email}
  */
  readonly oktaEmail?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_otp MfaPolicy#okta_otp}
  */
  readonly oktaOtp?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_password MfaPolicy#okta_password}
  */
  readonly oktaPassword?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_push MfaPolicy#okta_push}
  */
  readonly oktaPush?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_question MfaPolicy#okta_question}
  */
  readonly oktaQuestion?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_sms MfaPolicy#okta_sms}
  */
  readonly oktaSms?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_verify MfaPolicy#okta_verify}
  */
  readonly oktaVerify?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#onprem_mfa MfaPolicy#onprem_mfa}
  */
  readonly onpremMfa?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#phone_number MfaPolicy#phone_number}
  */
  readonly phoneNumber?: { [key: string]: string };
  /**
  * Policy Priority, this attribute can be set to a valid priority. To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#priority MfaPolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#rsa_token MfaPolicy#rsa_token}
  */
  readonly rsaToken?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#security_question MfaPolicy#security_question}
  */
  readonly securityQuestion?: { [key: string]: string };
  /**
  * Policy Status: ACTIVE or INACTIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#status MfaPolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#symantec_vip MfaPolicy#symantec_vip}
  */
  readonly symantecVip?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#webauthn MfaPolicy#webauthn}
  */
  readonly webauthn?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#yubikey_token MfaPolicy#yubikey_token}
  */
  readonly yubikeyToken?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy okta_mfa_policy}
*/
export class MfaPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_mfa_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy okta_mfa_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MfaPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MfaPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_mfa_policy',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.37.0',
        providerVersionConstraint: '~> 3.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._duo = config.duo;
    this._externalIdp = config.externalIdp;
    this._fidoU2F = config.fidoU2F;
    this._fidoWebauthn = config.fidoWebauthn;
    this._googleOtp = config.googleOtp;
    this._groupsIncluded = config.groupsIncluded;
    this._hotp = config.hotp;
    this._id = config.id;
    this._isOie = config.isOie;
    this._name = config.name;
    this._oktaCall = config.oktaCall;
    this._oktaEmail = config.oktaEmail;
    this._oktaOtp = config.oktaOtp;
    this._oktaPassword = config.oktaPassword;
    this._oktaPush = config.oktaPush;
    this._oktaQuestion = config.oktaQuestion;
    this._oktaSms = config.oktaSms;
    this._oktaVerify = config.oktaVerify;
    this._onpremMfa = config.onpremMfa;
    this._phoneNumber = config.phoneNumber;
    this._priority = config.priority;
    this._rsaToken = config.rsaToken;
    this._securityQuestion = config.securityQuestion;
    this._status = config.status;
    this._symantecVip = config.symantecVip;
    this._webauthn = config.webauthn;
    this._yubikeyToken = config.yubikeyToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // duo - computed: false, optional: true, required: false
  private _duo?: { [key: string]: string }; 
  public get duo() {
    return this.getStringMapAttribute('duo');
  }
  public set duo(value: { [key: string]: string }) {
    this._duo = value;
  }
  public resetDuo() {
    this._duo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duoInput() {
    return this._duo;
  }

  // external_idp - computed: false, optional: true, required: false
  private _externalIdp?: { [key: string]: string }; 
  public get externalIdp() {
    return this.getStringMapAttribute('external_idp');
  }
  public set externalIdp(value: { [key: string]: string }) {
    this._externalIdp = value;
  }
  public resetExternalIdp() {
    this._externalIdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdpInput() {
    return this._externalIdp;
  }

  // fido_u2f - computed: false, optional: true, required: false
  private _fidoU2F?: { [key: string]: string }; 
  public get fidoU2F() {
    return this.getStringMapAttribute('fido_u2f');
  }
  public set fidoU2F(value: { [key: string]: string }) {
    this._fidoU2F = value;
  }
  public resetFidoU2F() {
    this._fidoU2F = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fidoU2FInput() {
    return this._fidoU2F;
  }

  // fido_webauthn - computed: false, optional: true, required: false
  private _fidoWebauthn?: { [key: string]: string }; 
  public get fidoWebauthn() {
    return this.getStringMapAttribute('fido_webauthn');
  }
  public set fidoWebauthn(value: { [key: string]: string }) {
    this._fidoWebauthn = value;
  }
  public resetFidoWebauthn() {
    this._fidoWebauthn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fidoWebauthnInput() {
    return this._fidoWebauthn;
  }

  // google_otp - computed: false, optional: true, required: false
  private _googleOtp?: { [key: string]: string }; 
  public get googleOtp() {
    return this.getStringMapAttribute('google_otp');
  }
  public set googleOtp(value: { [key: string]: string }) {
    this._googleOtp = value;
  }
  public resetGoogleOtp() {
    this._googleOtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleOtpInput() {
    return this._googleOtp;
  }

  // groups_included - computed: false, optional: true, required: false
  private _groupsIncluded?: string[]; 
  public get groupsIncluded() {
    return cdktf.Fn.tolist(this.getListAttribute('groups_included'));
  }
  public set groupsIncluded(value: string[]) {
    this._groupsIncluded = value;
  }
  public resetGroupsIncluded() {
    this._groupsIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsIncludedInput() {
    return this._groupsIncluded;
  }

  // hotp - computed: false, optional: true, required: false
  private _hotp?: { [key: string]: string }; 
  public get hotp() {
    return this.getStringMapAttribute('hotp');
  }
  public set hotp(value: { [key: string]: string }) {
    this._hotp = value;
  }
  public resetHotp() {
    this._hotp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotpInput() {
    return this._hotp;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_oie - computed: false, optional: true, required: false
  private _isOie?: boolean | cdktf.IResolvable; 
  public get isOie() {
    return this.getBooleanAttribute('is_oie');
  }
  public set isOie(value: boolean | cdktf.IResolvable) {
    this._isOie = value;
  }
  public resetIsOie() {
    this._isOie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOieInput() {
    return this._isOie;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // okta_call - computed: false, optional: true, required: false
  private _oktaCall?: { [key: string]: string }; 
  public get oktaCall() {
    return this.getStringMapAttribute('okta_call');
  }
  public set oktaCall(value: { [key: string]: string }) {
    this._oktaCall = value;
  }
  public resetOktaCall() {
    this._oktaCall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaCallInput() {
    return this._oktaCall;
  }

  // okta_email - computed: false, optional: true, required: false
  private _oktaEmail?: { [key: string]: string }; 
  public get oktaEmail() {
    return this.getStringMapAttribute('okta_email');
  }
  public set oktaEmail(value: { [key: string]: string }) {
    this._oktaEmail = value;
  }
  public resetOktaEmail() {
    this._oktaEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaEmailInput() {
    return this._oktaEmail;
  }

  // okta_otp - computed: false, optional: true, required: false
  private _oktaOtp?: { [key: string]: string }; 
  public get oktaOtp() {
    return this.getStringMapAttribute('okta_otp');
  }
  public set oktaOtp(value: { [key: string]: string }) {
    this._oktaOtp = value;
  }
  public resetOktaOtp() {
    this._oktaOtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaOtpInput() {
    return this._oktaOtp;
  }

  // okta_password - computed: false, optional: true, required: false
  private _oktaPassword?: { [key: string]: string }; 
  public get oktaPassword() {
    return this.getStringMapAttribute('okta_password');
  }
  public set oktaPassword(value: { [key: string]: string }) {
    this._oktaPassword = value;
  }
  public resetOktaPassword() {
    this._oktaPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaPasswordInput() {
    return this._oktaPassword;
  }

  // okta_push - computed: false, optional: true, required: false
  private _oktaPush?: { [key: string]: string }; 
  public get oktaPush() {
    return this.getStringMapAttribute('okta_push');
  }
  public set oktaPush(value: { [key: string]: string }) {
    this._oktaPush = value;
  }
  public resetOktaPush() {
    this._oktaPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaPushInput() {
    return this._oktaPush;
  }

  // okta_question - computed: false, optional: true, required: false
  private _oktaQuestion?: { [key: string]: string }; 
  public get oktaQuestion() {
    return this.getStringMapAttribute('okta_question');
  }
  public set oktaQuestion(value: { [key: string]: string }) {
    this._oktaQuestion = value;
  }
  public resetOktaQuestion() {
    this._oktaQuestion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaQuestionInput() {
    return this._oktaQuestion;
  }

  // okta_sms - computed: false, optional: true, required: false
  private _oktaSms?: { [key: string]: string }; 
  public get oktaSms() {
    return this.getStringMapAttribute('okta_sms');
  }
  public set oktaSms(value: { [key: string]: string }) {
    this._oktaSms = value;
  }
  public resetOktaSms() {
    this._oktaSms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaSmsInput() {
    return this._oktaSms;
  }

  // okta_verify - computed: false, optional: true, required: false
  private _oktaVerify?: { [key: string]: string }; 
  public get oktaVerify() {
    return this.getStringMapAttribute('okta_verify');
  }
  public set oktaVerify(value: { [key: string]: string }) {
    this._oktaVerify = value;
  }
  public resetOktaVerify() {
    this._oktaVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaVerifyInput() {
    return this._oktaVerify;
  }

  // onprem_mfa - computed: false, optional: true, required: false
  private _onpremMfa?: { [key: string]: string }; 
  public get onpremMfa() {
    return this.getStringMapAttribute('onprem_mfa');
  }
  public set onpremMfa(value: { [key: string]: string }) {
    this._onpremMfa = value;
  }
  public resetOnpremMfa() {
    this._onpremMfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onpremMfaInput() {
    return this._onpremMfa;
  }

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber?: { [key: string]: string }; 
  public get phoneNumber() {
    return this.getStringMapAttribute('phone_number');
  }
  public set phoneNumber(value: { [key: string]: string }) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rsa_token - computed: false, optional: true, required: false
  private _rsaToken?: { [key: string]: string }; 
  public get rsaToken() {
    return this.getStringMapAttribute('rsa_token');
  }
  public set rsaToken(value: { [key: string]: string }) {
    this._rsaToken = value;
  }
  public resetRsaToken() {
    this._rsaToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaTokenInput() {
    return this._rsaToken;
  }

  // security_question - computed: false, optional: true, required: false
  private _securityQuestion?: { [key: string]: string }; 
  public get securityQuestion() {
    return this.getStringMapAttribute('security_question');
  }
  public set securityQuestion(value: { [key: string]: string }) {
    this._securityQuestion = value;
  }
  public resetSecurityQuestion() {
    this._securityQuestion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityQuestionInput() {
    return this._securityQuestion;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // symantec_vip - computed: false, optional: true, required: false
  private _symantecVip?: { [key: string]: string }; 
  public get symantecVip() {
    return this.getStringMapAttribute('symantec_vip');
  }
  public set symantecVip(value: { [key: string]: string }) {
    this._symantecVip = value;
  }
  public resetSymantecVip() {
    this._symantecVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symantecVipInput() {
    return this._symantecVip;
  }

  // webauthn - computed: false, optional: true, required: false
  private _webauthn?: { [key: string]: string }; 
  public get webauthn() {
    return this.getStringMapAttribute('webauthn');
  }
  public set webauthn(value: { [key: string]: string }) {
    this._webauthn = value;
  }
  public resetWebauthn() {
    this._webauthn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webauthnInput() {
    return this._webauthn;
  }

  // yubikey_token - computed: false, optional: true, required: false
  private _yubikeyToken?: { [key: string]: string }; 
  public get yubikeyToken() {
    return this.getStringMapAttribute('yubikey_token');
  }
  public set yubikeyToken(value: { [key: string]: string }) {
    this._yubikeyToken = value;
  }
  public resetYubikeyToken() {
    this._yubikeyToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yubikeyTokenInput() {
    return this._yubikeyToken;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      duo: cdktf.hashMapper(cdktf.stringToTerraform)(this._duo),
      external_idp: cdktf.hashMapper(cdktf.stringToTerraform)(this._externalIdp),
      fido_u2f: cdktf.hashMapper(cdktf.stringToTerraform)(this._fidoU2F),
      fido_webauthn: cdktf.hashMapper(cdktf.stringToTerraform)(this._fidoWebauthn),
      google_otp: cdktf.hashMapper(cdktf.stringToTerraform)(this._googleOtp),
      groups_included: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupsIncluded),
      hotp: cdktf.hashMapper(cdktf.stringToTerraform)(this._hotp),
      id: cdktf.stringToTerraform(this._id),
      is_oie: cdktf.booleanToTerraform(this._isOie),
      name: cdktf.stringToTerraform(this._name),
      okta_call: cdktf.hashMapper(cdktf.stringToTerraform)(this._oktaCall),
      okta_email: cdktf.hashMapper(cdktf.stringToTerraform)(this._oktaEmail),
      okta_otp: cdktf.hashMapper(cdktf.stringToTerraform)(this._oktaOtp),
      okta_password: cdktf.hashMapper(cdktf.stringToTerraform)(this._oktaPassword),
      okta_push: cdktf.hashMapper(cdktf.stringToTerraform)(this._oktaPush),
      okta_question: cdktf.hashMapper(cdktf.stringToTerraform)(this._oktaQuestion),
      okta_sms: cdktf.hashMapper(cdktf.stringToTerraform)(this._oktaSms),
      okta_verify: cdktf.hashMapper(cdktf.stringToTerraform)(this._oktaVerify),
      onprem_mfa: cdktf.hashMapper(cdktf.stringToTerraform)(this._onpremMfa),
      phone_number: cdktf.hashMapper(cdktf.stringToTerraform)(this._phoneNumber),
      priority: cdktf.numberToTerraform(this._priority),
      rsa_token: cdktf.hashMapper(cdktf.stringToTerraform)(this._rsaToken),
      security_question: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityQuestion),
      status: cdktf.stringToTerraform(this._status),
      symantec_vip: cdktf.hashMapper(cdktf.stringToTerraform)(this._symantecVip),
      webauthn: cdktf.hashMapper(cdktf.stringToTerraform)(this._webauthn),
      yubikey_token: cdktf.hashMapper(cdktf.stringToTerraform)(this._yubikeyToken),
    };
  }
}
