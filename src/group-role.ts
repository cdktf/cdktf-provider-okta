// https://www.terraform.io/docs/providers/okta/r/group_role.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * When this setting is enabled, the admins won't receive any of the default Okta administrator emails
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_role.html#disable_notifications GroupRole#disable_notifications}
  */
  readonly disableNotifications?: boolean | cdktf.IResolvable;
  /**
  * ID of group to attach admin roles to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_role.html#group_id GroupRole#group_id}
  */
  readonly groupId: string;
  /**
  * Type of Role to assign
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_role.html#role_type GroupRole#role_type}
  */
  readonly roleType: string;
  /**
  * List of apps ids for the targets of the admin role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_role.html#target_app_list GroupRole#target_app_list}
  */
  readonly targetAppList?: string[];
  /**
  * List of groups ids for the targets of the admin role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_role.html#target_group_list GroupRole#target_group_list}
  */
  readonly targetGroupList?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/group_role.html okta_group_role}
*/
export class GroupRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_group_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/group_role.html okta_group_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupRoleConfig
  */
  public constructor(scope: Construct, id: string, config: GroupRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_group_role',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._disableNotifications = config.disableNotifications;
    this._groupId = config.groupId;
    this._roleType = config.roleType;
    this._targetAppList = config.targetAppList;
    this._targetGroupList = config.targetGroupList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_notifications - computed: false, optional: true, required: false
  private _disableNotifications?: boolean | cdktf.IResolvable; 
  public get disableNotifications() {
    return this.getBooleanAttribute('disable_notifications') as any;
  }
  public set disableNotifications(value: boolean | cdktf.IResolvable) {
    this._disableNotifications = value;
  }
  public resetDisableNotifications() {
    this._disableNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNotificationsInput() {
    return this._disableNotifications;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // target_app_list - computed: false, optional: true, required: false
  private _targetAppList?: string[]; 
  public get targetAppList() {
    return this.getListAttribute('target_app_list');
  }
  public set targetAppList(value: string[]) {
    this._targetAppList = value;
  }
  public resetTargetAppList() {
    this._targetAppList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAppListInput() {
    return this._targetAppList;
  }

  // target_group_list - computed: false, optional: true, required: false
  private _targetGroupList?: string[]; 
  public get targetGroupList() {
    return this.getListAttribute('target_group_list');
  }
  public set targetGroupList(value: string[]) {
    this._targetGroupList = value;
  }
  public resetTargetGroupList() {
    this._targetGroupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupListInput() {
    return this._targetGroupList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_notifications: cdktf.booleanToTerraform(this._disableNotifications),
      group_id: cdktf.stringToTerraform(this._groupId),
      role_type: cdktf.stringToTerraform(this._roleType),
      target_app_list: cdktf.listMapper(cdktf.stringToTerraform)(this._targetAppList),
      target_group_list: cdktf.listMapper(cdktf.stringToTerraform)(this._targetGroupList),
    };
  }
}
