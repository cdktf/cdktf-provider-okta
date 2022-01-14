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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/event_hook_verification okta_event_hook_verification}
*/
export class EventHookVerification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_event_hook_verification";

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
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eventHookId = config.eventHookId;
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_hook_id: cdktf.stringToTerraform(this._eventHookId),
    };
  }
}
