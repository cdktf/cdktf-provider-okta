// https://www.terraform.io/docs/providers/okta/d/role_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaRoleSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of the notification
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/role_subscription.html#notification_type DataOktaRoleSubscription#notification_type}
  */
  readonly notificationType: string;
  /**
  * Type of the role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/role_subscription.html#role_type DataOktaRoleSubscription#role_type}
  */
  readonly roleType: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/role_subscription.html okta_role_subscription}
*/
export class DataOktaRoleSubscription extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_role_subscription";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/role_subscription.html okta_role_subscription} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaRoleSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaRoleSubscriptionConfig) {
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      notification_type: cdktf.stringToTerraform(this._notificationType),
      role_type: cdktf.stringToTerraform(this._roleType),
    };
  }
}
