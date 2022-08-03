// https://www.terraform.io/docs/providers/okta/r/factor_totp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FactorTotpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clock drift interval
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/factor_totp#clock_drift_interval FactorTotp#clock_drift_interval}
  */
  readonly clockDriftInterval?: number;
  /**
  * Hash-based message authentication code algorithm
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/factor_totp#hmac_algorithm FactorTotp#hmac_algorithm}
  */
  readonly hmacAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/factor_totp#id FactorTotp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Factor name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/factor_totp#name FactorTotp#name}
  */
  readonly name: string;
  /**
  * Factor name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/factor_totp#otp_length FactorTotp#otp_length}
  */
  readonly otpLength?: number;
  /**
  * Shared secret encoding
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/factor_totp#shared_secret_encoding FactorTotp#shared_secret_encoding}
  */
  readonly sharedSecretEncoding?: string;
  /**
  * Time step in seconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/factor_totp#time_step FactorTotp#time_step}
  */
  readonly timeStep?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/factor_totp okta_factor_totp}
*/
export class FactorTotp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_factor_totp";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/factor_totp okta_factor_totp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FactorTotpConfig
  */
  public constructor(scope: Construct, id: string, config: FactorTotpConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_factor_totp',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.33.0',
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
    this._clockDriftInterval = config.clockDriftInterval;
    this._hmacAlgorithm = config.hmacAlgorithm;
    this._id = config.id;
    this._name = config.name;
    this._otpLength = config.otpLength;
    this._sharedSecretEncoding = config.sharedSecretEncoding;
    this._timeStep = config.timeStep;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clock_drift_interval - computed: false, optional: true, required: false
  private _clockDriftInterval?: number; 
  public get clockDriftInterval() {
    return this.getNumberAttribute('clock_drift_interval');
  }
  public set clockDriftInterval(value: number) {
    this._clockDriftInterval = value;
  }
  public resetClockDriftInterval() {
    this._clockDriftInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockDriftIntervalInput() {
    return this._clockDriftInterval;
  }

  // hmac_algorithm - computed: false, optional: true, required: false
  private _hmacAlgorithm?: string; 
  public get hmacAlgorithm() {
    return this.getStringAttribute('hmac_algorithm');
  }
  public set hmacAlgorithm(value: string) {
    this._hmacAlgorithm = value;
  }
  public resetHmacAlgorithm() {
    this._hmacAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacAlgorithmInput() {
    return this._hmacAlgorithm;
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

  // otp_length - computed: false, optional: true, required: false
  private _otpLength?: number; 
  public get otpLength() {
    return this.getNumberAttribute('otp_length');
  }
  public set otpLength(value: number) {
    this._otpLength = value;
  }
  public resetOtpLength() {
    this._otpLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpLengthInput() {
    return this._otpLength;
  }

  // shared_secret_encoding - computed: false, optional: true, required: false
  private _sharedSecretEncoding?: string; 
  public get sharedSecretEncoding() {
    return this.getStringAttribute('shared_secret_encoding');
  }
  public set sharedSecretEncoding(value: string) {
    this._sharedSecretEncoding = value;
  }
  public resetSharedSecretEncoding() {
    this._sharedSecretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretEncodingInput() {
    return this._sharedSecretEncoding;
  }

  // time_step - computed: false, optional: true, required: false
  private _timeStep?: number; 
  public get timeStep() {
    return this.getNumberAttribute('time_step');
  }
  public set timeStep(value: number) {
    this._timeStep = value;
  }
  public resetTimeStep() {
    this._timeStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStepInput() {
    return this._timeStep;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clock_drift_interval: cdktf.numberToTerraform(this._clockDriftInterval),
      hmac_algorithm: cdktf.stringToTerraform(this._hmacAlgorithm),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      otp_length: cdktf.numberToTerraform(this._otpLength),
      shared_secret_encoding: cdktf.stringToTerraform(this._sharedSecretEncoding),
      time_step: cdktf.numberToTerraform(this._timeStep),
    };
  }
}
