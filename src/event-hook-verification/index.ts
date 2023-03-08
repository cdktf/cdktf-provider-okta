// https://www.terraform.io/docs/providers/okta/r/event_hook_verification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventHookVerificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Event hook ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/event_hook_verification#event_hook_id EventHookVerification#event_hook_id}
  */
  readonly eventHookId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/event_hook_verification#id EventHookVerification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/event_hook_verification okta_event_hook_verification}
*/
export class EventHookVerification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_event_hook_verification";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/event_hook_verification okta_event_hook_verification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventHookVerificationConfig
  */
  public constructor(scope: Construct, id: string, config: EventHookVerificationConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_event_hook_verification',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.43.0',
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
    this._eventHookId = config.eventHookId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_hook_id - computed: false, optional: false, required: true
  private _eventHookId?: string; 
  public get eventHookId() {
    return this.getStringAttribute('event_hook_id');
  }
  public set eventHookId(value: string) {
    this._eventHookId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHookIdInput() {
    return this._eventHookId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_hook_id: cdktf.stringToTerraform(this._eventHookId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
