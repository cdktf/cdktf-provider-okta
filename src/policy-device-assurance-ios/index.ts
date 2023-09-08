// https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/policy_device_assurance_ios
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyDeviceAssuranceIosConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device jailbreak. Only for android and iOS platform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/policy_device_assurance_ios#jailbreak PolicyDeviceAssuranceIos#jailbreak}
  */
  readonly jailbreak?: boolean | cdktf.IResolvable;
  /**
  * Policy device assurance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/policy_device_assurance_ios#name PolicyDeviceAssuranceIos#name}
  */
  readonly name: string;
  /**
  * The device os minimum version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/policy_device_assurance_ios#os_version PolicyDeviceAssuranceIos#os_version}
  */
  readonly osVersion?: string;
  /**
  * List of screenlock type, can be BIOMETRIC or BIOMETRIC, PASSCODE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/policy_device_assurance_ios#screenlock_type PolicyDeviceAssuranceIos#screenlock_type}
  */
  readonly screenlockType?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/policy_device_assurance_ios okta_policy_device_assurance_ios}
*/
export class PolicyDeviceAssuranceIos extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_policy_device_assurance_ios";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/policy_device_assurance_ios okta_policy_device_assurance_ios} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyDeviceAssuranceIosConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyDeviceAssuranceIosConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_policy_device_assurance_ios',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.4.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._jailbreak = config.jailbreak;
    this._name = config.name;
    this._osVersion = config.osVersion;
    this._screenlockType = config.screenlockType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jailbreak - computed: false, optional: true, required: false
  private _jailbreak?: boolean | cdktf.IResolvable; 
  public get jailbreak() {
    return this.getBooleanAttribute('jailbreak');
  }
  public set jailbreak(value: boolean | cdktf.IResolvable) {
    this._jailbreak = value;
  }
  public resetJailbreak() {
    this._jailbreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jailbreakInput() {
    return this._jailbreak;
  }

  // last_update - computed: true, optional: false, required: false
  public get lastUpdate() {
    return this.getStringAttribute('last_update');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
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

  // os_version - computed: false, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // screenlock_type - computed: false, optional: true, required: false
  private _screenlockType?: string[]; 
  public get screenlockType() {
    return cdktf.Fn.tolist(this.getListAttribute('screenlock_type'));
  }
  public set screenlockType(value: string[]) {
    this._screenlockType = value;
  }
  public resetScreenlockType() {
    this._screenlockType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenlockTypeInput() {
    return this._screenlockType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      jailbreak: cdktf.booleanToTerraform(this._jailbreak),
      name: cdktf.stringToTerraform(this._name),
      os_version: cdktf.stringToTerraform(this._osVersion),
      screenlock_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._screenlockType),
    };
  }
}
