// https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_device_assurance_android
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyDeviceAssuranceAndroidConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of disk encryption type, can be FULL, USER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_device_assurance_android#disk_encryption_type PolicyDeviceAssuranceAndroid#disk_encryption_type}
  */
  readonly diskEncryptionType?: string[];
  /**
  * The device jailbreak. Only for android and iOS platform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_device_assurance_android#jailbreak PolicyDeviceAssuranceAndroid#jailbreak}
  */
  readonly jailbreak?: boolean | cdktf.IResolvable;
  /**
  * Policy device assurance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_device_assurance_android#name PolicyDeviceAssuranceAndroid#name}
  */
  readonly name: string;
  /**
  * The device os minimum version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_device_assurance_android#os_version PolicyDeviceAssuranceAndroid#os_version}
  */
  readonly osVersion?: string;
  /**
  * List of screenlock type, can be BIOMETRIC or BIOMETRIC, PASSCODE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_device_assurance_android#screenlock_type PolicyDeviceAssuranceAndroid#screenlock_type}
  */
  readonly screenlockType?: string[];
  /**
  * Indicates if the device constains a secure hardware functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_device_assurance_android#secure_hardware_present PolicyDeviceAssuranceAndroid#secure_hardware_present}
  */
  readonly secureHardwarePresent?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_device_assurance_android okta_policy_device_assurance_android}
*/
export class PolicyDeviceAssuranceAndroid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_policy_device_assurance_android";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_device_assurance_android okta_policy_device_assurance_android} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyDeviceAssuranceAndroidConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyDeviceAssuranceAndroidConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_policy_device_assurance_android',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.2.0',
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
    this._diskEncryptionType = config.diskEncryptionType;
    this._jailbreak = config.jailbreak;
    this._name = config.name;
    this._osVersion = config.osVersion;
    this._screenlockType = config.screenlockType;
    this._secureHardwarePresent = config.secureHardwarePresent;
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

  // disk_encryption_type - computed: false, optional: true, required: false
  private _diskEncryptionType?: string[]; 
  public get diskEncryptionType() {
    return cdktf.Fn.tolist(this.getListAttribute('disk_encryption_type'));
  }
  public set diskEncryptionType(value: string[]) {
    this._diskEncryptionType = value;
  }
  public resetDiskEncryptionType() {
    this._diskEncryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionTypeInput() {
    return this._diskEncryptionType;
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

  // secure_hardware_present - computed: false, optional: true, required: false
  private _secureHardwarePresent?: boolean | cdktf.IResolvable; 
  public get secureHardwarePresent() {
    return this.getBooleanAttribute('secure_hardware_present');
  }
  public set secureHardwarePresent(value: boolean | cdktf.IResolvable) {
    this._secureHardwarePresent = value;
  }
  public resetSecureHardwarePresent() {
    this._secureHardwarePresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureHardwarePresentInput() {
    return this._secureHardwarePresent;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_encryption_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._diskEncryptionType),
      jailbreak: cdktf.booleanToTerraform(this._jailbreak),
      name: cdktf.stringToTerraform(this._name),
      os_version: cdktf.stringToTerraform(this._osVersion),
      screenlock_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._screenlockType),
      secure_hardware_present: cdktf.booleanToTerraform(this._secureHardwarePresent),
    };
  }
}
