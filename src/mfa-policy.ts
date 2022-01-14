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
  readonly duo?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_u2f MfaPolicy#fido_u2f}
  */
  readonly fidoU2F?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_webauthn MfaPolicy#fido_webauthn}
  */
  readonly fidoWebauthn?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#google_otp MfaPolicy#google_otp}
  */
  readonly googleOtp?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * List of Group IDs to Include
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#groups_included MfaPolicy#groups_included}
  */
  readonly groupsIncluded?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#hotp MfaPolicy#hotp}
  */
  readonly hotp?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Policy Name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#name MfaPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_call MfaPolicy#okta_call}
  */
  readonly oktaCall?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_email MfaPolicy#okta_email}
  */
  readonly oktaEmail?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_otp MfaPolicy#okta_otp}
  */
  readonly oktaOtp?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_password MfaPolicy#okta_password}
  */
  readonly oktaPassword?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_push MfaPolicy#okta_push}
  */
  readonly oktaPush?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_question MfaPolicy#okta_question}
  */
  readonly oktaQuestion?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_sms MfaPolicy#okta_sms}
  */
  readonly oktaSms?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Policy Priority, this attribute can be set to a valid priority. To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#priority MfaPolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#rsa_token MfaPolicy#rsa_token}
  */
  readonly rsaToken?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Policy Status: ACTIVE or INACTIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#status MfaPolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#symantec_vip MfaPolicy#symantec_vip}
  */
  readonly symantecVip?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#yubikey_token MfaPolicy#yubikey_token}
  */
  readonly yubikeyToken?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy okta_mfa_policy}
*/
export class MfaPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_mfa_policy";

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
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._duo = config.duo;
    this._fidoU2F = config.fidoU2F;
    this._fidoWebauthn = config.fidoWebauthn;
    this._googleOtp = config.googleOtp;
    this._groupsIncluded = config.groupsIncluded;
    this._hotp = config.hotp;
    this._name = config.name;
    this._oktaCall = config.oktaCall;
    this._oktaEmail = config.oktaEmail;
    this._oktaOtp = config.oktaOtp;
    this._oktaPassword = config.oktaPassword;
    this._oktaPush = config.oktaPush;
    this._oktaQuestion = config.oktaQuestion;
    this._oktaSms = config.oktaSms;
    this._priority = config.priority;
    this._rsaToken = config.rsaToken;
    this._status = config.status;
    this._symantecVip = config.symantecVip;
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
  private _duo?: { [key: string]: string } | cdktf.IResolvable; 
  public get duo() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('duo') as any;
  }
  public set duo(value: { [key: string]: string } | cdktf.IResolvable) {
    this._duo = value;
  }
  public resetDuo() {
    this._duo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duoInput() {
    return this._duo;
  }

  // fido_u2f - computed: false, optional: true, required: false
  private _fidoU2F?: { [key: string]: string } | cdktf.IResolvable; 
  public get fidoU2F() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('fido_u2f') as any;
  }
  public set fidoU2F(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _fidoWebauthn?: { [key: string]: string } | cdktf.IResolvable; 
  public get fidoWebauthn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('fido_webauthn') as any;
  }
  public set fidoWebauthn(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _googleOtp?: { [key: string]: string } | cdktf.IResolvable; 
  public get googleOtp() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('google_otp') as any;
  }
  public set googleOtp(value: { [key: string]: string } | cdktf.IResolvable) {
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
    return this.getListAttribute('groups_included');
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
  private _hotp?: { [key: string]: string } | cdktf.IResolvable; 
  public get hotp() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('hotp') as any;
  }
  public set hotp(value: { [key: string]: string } | cdktf.IResolvable) {
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _oktaCall?: { [key: string]: string } | cdktf.IResolvable; 
  public get oktaCall() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('okta_call') as any;
  }
  public set oktaCall(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _oktaEmail?: { [key: string]: string } | cdktf.IResolvable; 
  public get oktaEmail() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('okta_email') as any;
  }
  public set oktaEmail(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _oktaOtp?: { [key: string]: string } | cdktf.IResolvable; 
  public get oktaOtp() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('okta_otp') as any;
  }
  public set oktaOtp(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _oktaPassword?: { [key: string]: string } | cdktf.IResolvable; 
  public get oktaPassword() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('okta_password') as any;
  }
  public set oktaPassword(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _oktaPush?: { [key: string]: string } | cdktf.IResolvable; 
  public get oktaPush() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('okta_push') as any;
  }
  public set oktaPush(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _oktaQuestion?: { [key: string]: string } | cdktf.IResolvable; 
  public get oktaQuestion() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('okta_question') as any;
  }
  public set oktaQuestion(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _oktaSms?: { [key: string]: string } | cdktf.IResolvable; 
  public get oktaSms() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('okta_sms') as any;
  }
  public set oktaSms(value: { [key: string]: string } | cdktf.IResolvable) {
    this._oktaSms = value;
  }
  public resetOktaSms() {
    this._oktaSms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaSmsInput() {
    return this._oktaSms;
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
  private _rsaToken?: { [key: string]: string } | cdktf.IResolvable; 
  public get rsaToken() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rsa_token') as any;
  }
  public set rsaToken(value: { [key: string]: string } | cdktf.IResolvable) {
    this._rsaToken = value;
  }
  public resetRsaToken() {
    this._rsaToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaTokenInput() {
    return this._rsaToken;
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
  private _symantecVip?: { [key: string]: string } | cdktf.IResolvable; 
  public get symantecVip() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('symantec_vip') as any;
  }
  public set symantecVip(value: { [key: string]: string } | cdktf.IResolvable) {
    this._symantecVip = value;
  }
  public resetSymantecVip() {
    this._symantecVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symantecVipInput() {
    return this._symantecVip;
  }

  // yubikey_token - computed: false, optional: true, required: false
  private _yubikeyToken?: { [key: string]: string } | cdktf.IResolvable; 
  public get yubikeyToken() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('yubikey_token') as any;
  }
  public set yubikeyToken(value: { [key: string]: string } | cdktf.IResolvable) {
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
      duo: cdktf.hashMapper(cdktf.anyToTerraform)(this._duo),
      fido_u2f: cdktf.hashMapper(cdktf.anyToTerraform)(this._fidoU2F),
      fido_webauthn: cdktf.hashMapper(cdktf.anyToTerraform)(this._fidoWebauthn),
      google_otp: cdktf.hashMapper(cdktf.anyToTerraform)(this._googleOtp),
      groups_included: cdktf.listMapper(cdktf.stringToTerraform)(this._groupsIncluded),
      hotp: cdktf.hashMapper(cdktf.anyToTerraform)(this._hotp),
      name: cdktf.stringToTerraform(this._name),
      okta_call: cdktf.hashMapper(cdktf.anyToTerraform)(this._oktaCall),
      okta_email: cdktf.hashMapper(cdktf.anyToTerraform)(this._oktaEmail),
      okta_otp: cdktf.hashMapper(cdktf.anyToTerraform)(this._oktaOtp),
      okta_password: cdktf.hashMapper(cdktf.anyToTerraform)(this._oktaPassword),
      okta_push: cdktf.hashMapper(cdktf.anyToTerraform)(this._oktaPush),
      okta_question: cdktf.hashMapper(cdktf.anyToTerraform)(this._oktaQuestion),
      okta_sms: cdktf.hashMapper(cdktf.anyToTerraform)(this._oktaSms),
      priority: cdktf.numberToTerraform(this._priority),
      rsa_token: cdktf.hashMapper(cdktf.anyToTerraform)(this._rsaToken),
      status: cdktf.stringToTerraform(this._status),
      symantec_vip: cdktf.hashMapper(cdktf.anyToTerraform)(this._symantecVip),
      yubikey_token: cdktf.hashMapper(cdktf.anyToTerraform)(this._yubikeyToken),
    };
  }
}
