// https://www.terraform.io/docs/providers/okta/r/role_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of the notification
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/role_subscription#notification_type RoleSubscription#notification_type}
  */
  readonly notificationType: string;
  /**
  * Type of the role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/role_subscription#role_type RoleSubscription#role_type}
  */
  readonly roleType: string;
  /**
  * Status of subscription
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/role_subscription#status RoleSubscription#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/role_subscription okta_role_subscription}
*/
export class RoleSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_role_subscription";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/role_subscription okta_role_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: RoleSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_role_subscription',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._notificationType = config.notificationType;
    this._roleType = config.roleType;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notification_type - computed: false, optional: false, required: true
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }

  // role_type - computed: false, optional: false, required: true
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      notification_type: cdktf.stringToTerraform(this._notificationType),
      role_type: cdktf.stringToTerraform(this._roleType),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
