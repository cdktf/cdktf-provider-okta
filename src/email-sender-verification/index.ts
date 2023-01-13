// https://www.terraform.io/docs/providers/okta/r/email_sender_verification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailSenderVerificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_sender_verification#id EmailSenderVerification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Email sender ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/email_sender_verification#sender_id EmailSenderVerification#sender_id}
  */
  readonly senderId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/email_sender_verification okta_email_sender_verification}
*/
export class EmailSenderVerification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_email_sender_verification";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/email_sender_verification okta_email_sender_verification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailSenderVerificationConfig
  */
  public constructor(scope: Construct, id: string, config: EmailSenderVerificationConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_email_sender_verification',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.40.0',
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
    this._id = config.id;
    this._senderId = config.senderId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // sender_id - computed: false, optional: false, required: true
  private _senderId?: string; 
  public get senderId() {
    return this.getStringAttribute('sender_id');
  }
  public set senderId(value: string) {
    this._senderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get senderIdInput() {
    return this._senderId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      sender_id: cdktf.stringToTerraform(this._senderId),
    };
  }
}
