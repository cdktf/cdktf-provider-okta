// https://www.terraform.io/docs/providers/okta/r/app_group_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppGroupAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * App to associate group with
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_group_assignment#app_id AppGroupAssignment#app_id}
  */
  readonly appId: string;
  /**
  * Group associated with the application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_group_assignment#group_id AppGroupAssignment#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_group_assignment#id AppGroupAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_group_assignment#priority AppGroupAssignment#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_group_assignment#profile AppGroupAssignment#profile}
  */
  readonly profile?: string;
  /**
  * Retain the group assignment on destroy. If set to true, the resource will be removed from state but not from the Okta app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_group_assignment#retain_assignment AppGroupAssignment#retain_assignment}
  */
  readonly retainAssignment?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_group_assignment okta_app_group_assignment}
*/
export class AppGroupAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app_group_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/app_group_assignment okta_app_group_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppGroupAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: AppGroupAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_group_assignment',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.32.0',
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
    this._appId = config.appId;
    this._groupId = config.groupId;
    this._id = config.id;
    this._priority = config.priority;
    this._profile = config.profile;
    this._retainAssignment = config.retainAssignment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // retain_assignment - computed: false, optional: true, required: false
  private _retainAssignment?: boolean | cdktf.IResolvable; 
  public get retainAssignment() {
    return this.getBooleanAttribute('retain_assignment');
  }
  public set retainAssignment(value: boolean | cdktf.IResolvable) {
    this._retainAssignment = value;
  }
  public resetRetainAssignment() {
    this._retainAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAssignmentInput() {
    return this._retainAssignment;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      profile: cdktf.stringToTerraform(this._profile),
      retain_assignment: cdktf.booleanToTerraform(this._retainAssignment),
    };
  }
}
