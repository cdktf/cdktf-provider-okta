# `securityNotificationEmails` Submodule <a name="`securityNotificationEmails` Submodule" id="@cdktf/provider-okta.securityNotificationEmails"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityNotificationEmails <a name="SecurityNotificationEmails" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/security_notification_emails okta_security_notification_emails}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import security_notification_emails

securityNotificationEmails.SecurityNotificationEmails(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  report_suspicious_activity_enabled: typing.Union[bool, IResolvable] = None,
  send_email_for_factor_enrollment_enabled: typing.Union[bool, IResolvable] = None,
  send_email_for_factor_reset_enabled: typing.Union[bool, IResolvable] = None,
  send_email_for_new_device_enabled: typing.Union[bool, IResolvable] = None,
  send_email_for_password_changed_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/security_notification_emails#id SecurityNotificationEmails#id}. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.reportSuspiciousActivityEnabled">report_suspicious_activity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Notifies end users about suspicious or unrecognized activity from their account. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.sendEmailForFactorEnrollmentEnabled">send_email_for_factor_enrollment_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Notifies end users of any activity on their account related to MFA factor enrollment. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.sendEmailForFactorResetEnabled">send_email_for_factor_reset_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Notifies end users that one or more factors have been reset for their account. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.sendEmailForNewDeviceEnabled">send_email_for_new_device_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Notifies end users about new sign-on activity. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.sendEmailForPasswordChangedEnabled">send_email_for_password_changed_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Notifies end users that the password for their account has changed. Default is `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/security_notification_emails#id SecurityNotificationEmails#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `report_suspicious_activity_enabled`<sup>Optional</sup> <a name="report_suspicious_activity_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.reportSuspiciousActivityEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Notifies end users about suspicious or unrecognized activity from their account. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/security_notification_emails#report_suspicious_activity_enabled SecurityNotificationEmails#report_suspicious_activity_enabled}

---

##### `send_email_for_factor_enrollment_enabled`<sup>Optional</sup> <a name="send_email_for_factor_enrollment_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.sendEmailForFactorEnrollmentEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Notifies end users of any activity on their account related to MFA factor enrollment. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/security_notification_emails#send_email_for_factor_enrollment_enabled SecurityNotificationEmails#send_email_for_factor_enrollment_enabled}

---

##### `send_email_for_factor_reset_enabled`<sup>Optional</sup> <a name="send_email_for_factor_reset_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.sendEmailForFactorResetEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Notifies end users that one or more factors have been reset for their account. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/security_notification_emails#send_email_for_factor_reset_enabled SecurityNotificationEmails#send_email_for_factor_reset_enabled}

---

##### `send_email_for_new_device_enabled`<sup>Optional</sup> <a name="send_email_for_new_device_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.sendEmailForNewDeviceEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Notifies end users about new sign-on activity. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/security_notification_emails#send_email_for_new_device_enabled SecurityNotificationEmails#send_email_for_new_device_enabled}

---

##### `send_email_for_password_changed_enabled`<sup>Optional</sup> <a name="send_email_for_password_changed_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.sendEmailForPasswordChangedEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Notifies end users that the password for their account has changed. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/security_notification_emails#send_email_for_password_changed_enabled SecurityNotificationEmails#send_email_for_password_changed_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetReportSuspiciousActivityEnabled">reset_report_suspicious_activity_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForFactorEnrollmentEnabled">reset_send_email_for_factor_enrollment_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForFactorResetEnabled">reset_send_email_for_factor_reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForNewDeviceEnabled">reset_send_email_for_new_device_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForPasswordChangedEnabled">reset_send_email_for_password_changed_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_report_suspicious_activity_enabled` <a name="reset_report_suspicious_activity_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetReportSuspiciousActivityEnabled"></a>

```python
def reset_report_suspicious_activity_enabled() -> None
```

##### `reset_send_email_for_factor_enrollment_enabled` <a name="reset_send_email_for_factor_enrollment_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForFactorEnrollmentEnabled"></a>

```python
def reset_send_email_for_factor_enrollment_enabled() -> None
```

##### `reset_send_email_for_factor_reset_enabled` <a name="reset_send_email_for_factor_reset_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForFactorResetEnabled"></a>

```python
def reset_send_email_for_factor_reset_enabled() -> None
```

##### `reset_send_email_for_new_device_enabled` <a name="reset_send_email_for_new_device_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForNewDeviceEnabled"></a>

```python
def reset_send_email_for_new_device_enabled() -> None
```

##### `reset_send_email_for_password_changed_enabled` <a name="reset_send_email_for_password_changed_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForPasswordChangedEnabled"></a>

```python
def reset_send_email_for_password_changed_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecurityNotificationEmails resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import security_notification_emails

securityNotificationEmails.SecurityNotificationEmails.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import security_notification_emails

securityNotificationEmails.SecurityNotificationEmails.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import security_notification_emails

securityNotificationEmails.SecurityNotificationEmails.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import security_notification_emails

securityNotificationEmails.SecurityNotificationEmails.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecurityNotificationEmails resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityNotificationEmails to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityNotificationEmails that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/security_notification_emails#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityNotificationEmails to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.reportSuspiciousActivityEnabledInput">report_suspicious_activity_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorEnrollmentEnabledInput">send_email_for_factor_enrollment_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorResetEnabledInput">send_email_for_factor_reset_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForNewDeviceEnabledInput">send_email_for_new_device_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForPasswordChangedEnabledInput">send_email_for_password_changed_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.reportSuspiciousActivityEnabled">report_suspicious_activity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorEnrollmentEnabled">send_email_for_factor_enrollment_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorResetEnabled">send_email_for_factor_reset_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForNewDeviceEnabled">send_email_for_new_device_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForPasswordChangedEnabled">send_email_for_password_changed_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `report_suspicious_activity_enabled_input`<sup>Optional</sup> <a name="report_suspicious_activity_enabled_input" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.reportSuspiciousActivityEnabledInput"></a>

```python
report_suspicious_activity_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_email_for_factor_enrollment_enabled_input`<sup>Optional</sup> <a name="send_email_for_factor_enrollment_enabled_input" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorEnrollmentEnabledInput"></a>

```python
send_email_for_factor_enrollment_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_email_for_factor_reset_enabled_input`<sup>Optional</sup> <a name="send_email_for_factor_reset_enabled_input" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorResetEnabledInput"></a>

```python
send_email_for_factor_reset_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_email_for_new_device_enabled_input`<sup>Optional</sup> <a name="send_email_for_new_device_enabled_input" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForNewDeviceEnabledInput"></a>

```python
send_email_for_new_device_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_email_for_password_changed_enabled_input`<sup>Optional</sup> <a name="send_email_for_password_changed_enabled_input" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForPasswordChangedEnabledInput"></a>

```python
send_email_for_password_changed_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `report_suspicious_activity_enabled`<sup>Required</sup> <a name="report_suspicious_activity_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.reportSuspiciousActivityEnabled"></a>

```python
report_suspicious_activity_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_email_for_factor_enrollment_enabled`<sup>Required</sup> <a name="send_email_for_factor_enrollment_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorEnrollmentEnabled"></a>

```python
send_email_for_factor_enrollment_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_email_for_factor_reset_enabled`<sup>Required</sup> <a name="send_email_for_factor_reset_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorResetEnabled"></a>

```python
send_email_for_factor_reset_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_email_for_new_device_enabled`<sup>Required</sup> <a name="send_email_for_new_device_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForNewDeviceEnabled"></a>

```python
send_email_for_new_device_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_email_for_password_changed_enabled`<sup>Required</sup> <a name="send_email_for_password_changed_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForPasswordChangedEnabled"></a>

```python
send_email_for_password_changed_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityNotificationEmailsConfig <a name="SecurityNotificationEmailsConfig" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import security_notification_emails

securityNotificationEmails.SecurityNotificationEmailsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  report_suspicious_activity_enabled: typing.Union[bool, IResolvable] = None,
  send_email_for_factor_enrollment_enabled: typing.Union[bool, IResolvable] = None,
  send_email_for_factor_reset_enabled: typing.Union[bool, IResolvable] = None,
  send_email_for_new_device_enabled: typing.Union[bool, IResolvable] = None,
  send_email_for_password_changed_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/security_notification_emails#id SecurityNotificationEmails#id}. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.reportSuspiciousActivityEnabled">report_suspicious_activity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Notifies end users about suspicious or unrecognized activity from their account. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForFactorEnrollmentEnabled">send_email_for_factor_enrollment_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Notifies end users of any activity on their account related to MFA factor enrollment. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForFactorResetEnabled">send_email_for_factor_reset_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Notifies end users that one or more factors have been reset for their account. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForNewDeviceEnabled">send_email_for_new_device_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Notifies end users about new sign-on activity. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForPasswordChangedEnabled">send_email_for_password_changed_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Notifies end users that the password for their account has changed. Default is `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/security_notification_emails#id SecurityNotificationEmails#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `report_suspicious_activity_enabled`<sup>Optional</sup> <a name="report_suspicious_activity_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.reportSuspiciousActivityEnabled"></a>

```python
report_suspicious_activity_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Notifies end users about suspicious or unrecognized activity from their account. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/security_notification_emails#report_suspicious_activity_enabled SecurityNotificationEmails#report_suspicious_activity_enabled}

---

##### `send_email_for_factor_enrollment_enabled`<sup>Optional</sup> <a name="send_email_for_factor_enrollment_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForFactorEnrollmentEnabled"></a>

```python
send_email_for_factor_enrollment_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Notifies end users of any activity on their account related to MFA factor enrollment. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/security_notification_emails#send_email_for_factor_enrollment_enabled SecurityNotificationEmails#send_email_for_factor_enrollment_enabled}

---

##### `send_email_for_factor_reset_enabled`<sup>Optional</sup> <a name="send_email_for_factor_reset_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForFactorResetEnabled"></a>

```python
send_email_for_factor_reset_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Notifies end users that one or more factors have been reset for their account. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/security_notification_emails#send_email_for_factor_reset_enabled SecurityNotificationEmails#send_email_for_factor_reset_enabled}

---

##### `send_email_for_new_device_enabled`<sup>Optional</sup> <a name="send_email_for_new_device_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForNewDeviceEnabled"></a>

```python
send_email_for_new_device_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Notifies end users about new sign-on activity. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/security_notification_emails#send_email_for_new_device_enabled SecurityNotificationEmails#send_email_for_new_device_enabled}

---

##### `send_email_for_password_changed_enabled`<sup>Optional</sup> <a name="send_email_for_password_changed_enabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForPasswordChangedEnabled"></a>

```python
send_email_for_password_changed_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Notifies end users that the password for their account has changed. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/security_notification_emails#send_email_for_password_changed_enabled SecurityNotificationEmails#send_email_for_password_changed_enabled}

---



