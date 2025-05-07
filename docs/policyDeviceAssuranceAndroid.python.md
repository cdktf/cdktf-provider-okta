# `policyDeviceAssuranceAndroid` Submodule <a name="`policyDeviceAssuranceAndroid` Submodule" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyDeviceAssuranceAndroid <a name="PolicyDeviceAssuranceAndroid" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_device_assurance_android okta_policy_device_assurance_android}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_android

policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  disk_encryption_type: typing.List[str] = None,
  jailbreak: typing.Union[bool, IResolvable] = None,
  os_version: str = None,
  screenlock_type: typing.List[str] = None,
  secure_hardware_present: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.name">name</a></code> | <code>str</code> | Policy device assurance name. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.diskEncryptionType">disk_encryption_type</a></code> | <code>typing.List[str]</code> | List of disk encryption type, can be `FULL`, `USER`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.jailbreak">jailbreak</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the device jailbroken in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.osVersion">os_version</a></code> | <code>str</code> | Minimum os version of the device in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.screenlockType">screenlock_type</a></code> | <code>typing.List[str]</code> | List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.secureHardwarePresent">secure_hardware_present</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the device contains a secure hardware functionality. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.name"></a>

- *Type:* str

Policy device assurance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_device_assurance_android#name PolicyDeviceAssuranceAndroid#name}

---

##### `disk_encryption_type`<sup>Optional</sup> <a name="disk_encryption_type" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.diskEncryptionType"></a>

- *Type:* typing.List[str]

List of disk encryption type, can be `FULL`, `USER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_device_assurance_android#disk_encryption_type PolicyDeviceAssuranceAndroid#disk_encryption_type}

---

##### `jailbreak`<sup>Optional</sup> <a name="jailbreak" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.jailbreak"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the device jailbroken in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_device_assurance_android#jailbreak PolicyDeviceAssuranceAndroid#jailbreak}

---

##### `os_version`<sup>Optional</sup> <a name="os_version" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.osVersion"></a>

- *Type:* str

Minimum os version of the device in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_device_assurance_android#os_version PolicyDeviceAssuranceAndroid#os_version}

---

##### `screenlock_type`<sup>Optional</sup> <a name="screenlock_type" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.screenlockType"></a>

- *Type:* typing.List[str]

List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_device_assurance_android#screenlock_type PolicyDeviceAssuranceAndroid#screenlock_type}

---

##### `secure_hardware_present`<sup>Optional</sup> <a name="secure_hardware_present" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.Initializer.parameter.secureHardwarePresent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the device contains a secure hardware functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_device_assurance_android#secure_hardware_present PolicyDeviceAssuranceAndroid#secure_hardware_present}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetDiskEncryptionType">reset_disk_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetJailbreak">reset_jailbreak</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetOsVersion">reset_os_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetScreenlockType">reset_screenlock_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetSecureHardwarePresent">reset_secure_hardware_present</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_disk_encryption_type` <a name="reset_disk_encryption_type" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetDiskEncryptionType"></a>

```python
def reset_disk_encryption_type() -> None
```

##### `reset_jailbreak` <a name="reset_jailbreak" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetJailbreak"></a>

```python
def reset_jailbreak() -> None
```

##### `reset_os_version` <a name="reset_os_version" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetOsVersion"></a>

```python
def reset_os_version() -> None
```

##### `reset_screenlock_type` <a name="reset_screenlock_type" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetScreenlockType"></a>

```python
def reset_screenlock_type() -> None
```

##### `reset_secure_hardware_present` <a name="reset_secure_hardware_present" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.resetSecureHardwarePresent"></a>

```python
def reset_secure_hardware_present() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PolicyDeviceAssuranceAndroid resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_android

policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_android

policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_android

policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_android

policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PolicyDeviceAssuranceAndroid resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PolicyDeviceAssuranceAndroid to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PolicyDeviceAssuranceAndroid that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_device_assurance_android#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyDeviceAssuranceAndroid to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lastUpdate">last_update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lastUpdatedBy">last_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.diskEncryptionTypeInput">disk_encryption_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.jailbreakInput">jailbreak_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.osVersionInput">os_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.screenlockTypeInput">screenlock_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.secureHardwarePresentInput">secure_hardware_present_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.diskEncryptionType">disk_encryption_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.jailbreak">jailbreak</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.screenlockType">screenlock_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.secureHardwarePresent">secure_hardware_present</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_update`<sup>Required</sup> <a name="last_update" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lastUpdate"></a>

```python
last_update: str
```

- *Type:* str

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.lastUpdatedBy"></a>

```python
last_updated_by: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `disk_encryption_type_input`<sup>Optional</sup> <a name="disk_encryption_type_input" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.diskEncryptionTypeInput"></a>

```python
disk_encryption_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jailbreak_input`<sup>Optional</sup> <a name="jailbreak_input" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.jailbreakInput"></a>

```python
jailbreak_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `os_version_input`<sup>Optional</sup> <a name="os_version_input" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.osVersionInput"></a>

```python
os_version_input: str
```

- *Type:* str

---

##### `screenlock_type_input`<sup>Optional</sup> <a name="screenlock_type_input" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.screenlockTypeInput"></a>

```python
screenlock_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secure_hardware_present_input`<sup>Optional</sup> <a name="secure_hardware_present_input" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.secureHardwarePresentInput"></a>

```python
secure_hardware_present_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disk_encryption_type`<sup>Required</sup> <a name="disk_encryption_type" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.diskEncryptionType"></a>

```python
disk_encryption_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jailbreak`<sup>Required</sup> <a name="jailbreak" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.jailbreak"></a>

```python
jailbreak: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `screenlock_type`<sup>Required</sup> <a name="screenlock_type" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.screenlockType"></a>

```python
screenlock_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secure_hardware_present`<sup>Required</sup> <a name="secure_hardware_present" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.secureHardwarePresent"></a>

```python
secure_hardware_present: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroid.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyDeviceAssuranceAndroidConfig <a name="PolicyDeviceAssuranceAndroidConfig" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_device_assurance_android

policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  disk_encryption_type: typing.List[str] = None,
  jailbreak: typing.Union[bool, IResolvable] = None,
  os_version: str = None,
  screenlock_type: typing.List[str] = None,
  secure_hardware_present: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.name">name</a></code> | <code>str</code> | Policy device assurance name. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.diskEncryptionType">disk_encryption_type</a></code> | <code>typing.List[str]</code> | List of disk encryption type, can be `FULL`, `USER`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.jailbreak">jailbreak</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is the device jailbroken in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.osVersion">os_version</a></code> | <code>str</code> | Minimum os version of the device in the device assurance policy. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.screenlockType">screenlock_type</a></code> | <code>typing.List[str]</code> | List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`. |
| <code><a href="#@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.secureHardwarePresent">secure_hardware_present</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the device contains a secure hardware functionality. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Policy device assurance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_device_assurance_android#name PolicyDeviceAssuranceAndroid#name}

---

##### `disk_encryption_type`<sup>Optional</sup> <a name="disk_encryption_type" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.diskEncryptionType"></a>

```python
disk_encryption_type: typing.List[str]
```

- *Type:* typing.List[str]

List of disk encryption type, can be `FULL`, `USER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_device_assurance_android#disk_encryption_type PolicyDeviceAssuranceAndroid#disk_encryption_type}

---

##### `jailbreak`<sup>Optional</sup> <a name="jailbreak" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.jailbreak"></a>

```python
jailbreak: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is the device jailbroken in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_device_assurance_android#jailbreak PolicyDeviceAssuranceAndroid#jailbreak}

---

##### `os_version`<sup>Optional</sup> <a name="os_version" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

Minimum os version of the device in the device assurance policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_device_assurance_android#os_version PolicyDeviceAssuranceAndroid#os_version}

---

##### `screenlock_type`<sup>Optional</sup> <a name="screenlock_type" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.screenlockType"></a>

```python
screenlock_type: typing.List[str]
```

- *Type:* typing.List[str]

List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_device_assurance_android#screenlock_type PolicyDeviceAssuranceAndroid#screenlock_type}

---

##### `secure_hardware_present`<sup>Optional</sup> <a name="secure_hardware_present" id="@cdktf/provider-okta.policyDeviceAssuranceAndroid.PolicyDeviceAssuranceAndroidConfig.property.secureHardwarePresent"></a>

```python
secure_hardware_present: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the device contains a secure hardware functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/policy_device_assurance_android#secure_hardware_present PolicyDeviceAssuranceAndroid#secure_hardware_present}

---



