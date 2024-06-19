# `logStream` Submodule <a name="`logStream` Submodule" id="@cdktf/provider-okta.logStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogStream <a name="LogStream" id="@cdktf/provider-okta.logStream.LogStream"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream okta_log_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.logStream.LogStream.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import log_stream

logStream.LogStream(
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
  type: str,
  settings: LogStreamSettings = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name for the Log Stream object. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.type">type</a></code> | <code>str</code> | Streaming provider used - 'aws_eventbridge' or 'splunk_cloud_logstreaming'. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettings">LogStreamSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.status">status</a></code> | <code>str</code> | Stream status. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.name"></a>

- *Type:* str

Unique name for the Log Stream object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#name LogStream#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.type"></a>

- *Type:* str

Streaming provider used - 'aws_eventbridge' or 'splunk_cloud_logstreaming'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#type LogStream#type}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-okta.logStream.LogStreamSettings">LogStreamSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#settings LogStream#settings}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.logStream.LogStream.Initializer.parameter.status"></a>

- *Type:* str

Stream status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#status LogStream#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.logStream.LogStream.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.logStream.LogStream.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.logStream.LogStream.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.logStream.LogStream.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.logStream.LogStream.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.logStream.LogStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.logStream.LogStream.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.logStream.LogStream.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.logStream.LogStream.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.logStream.LogStream.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.logStream.LogStream.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.logStream.LogStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.logStream.LogStream.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.logStream.LogStream.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.logStream.LogStream.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.logStream.LogStream.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.logStream.LogStream.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.logStream.LogStream.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.logStream.LogStream.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.logStream.LogStream.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.logStream.LogStream.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.logStream.LogStream.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.logStream.LogStream.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.logStream.LogStream.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.logStream.LogStream.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.logStream.LogStream.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.logStream.LogStream.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.logStream.LogStream.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.logStream.LogStream.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.logStream.LogStream.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.logStream.LogStream.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.logStream.LogStream.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.logStream.LogStream.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_settings` <a name="put_settings" id="@cdktf/provider-okta.logStream.LogStream.putSettings"></a>

```python
def put_settings(
  account_id: str = None,
  edition: str = None,
  event_source_name: str = None,
  host: str = None,
  region: str = None,
  token: str = None
) -> None
```

###### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-okta.logStream.LogStream.putSettings.parameter.accountId"></a>

- *Type:* str

AWS account ID. Required only for 'aws_eventbridge' type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#account_id LogStream#account_id}

---

###### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-okta.logStream.LogStream.putSettings.parameter.edition"></a>

- *Type:* str

Edition of the Splunk Cloud instance. Could be one of: 'aws', 'aws_govcloud', 'gcp'. Required only for 'splunk_cloud_logstreaming' type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#edition LogStream#edition}

---

###### `event_source_name`<sup>Optional</sup> <a name="event_source_name" id="@cdktf/provider-okta.logStream.LogStream.putSettings.parameter.eventSourceName"></a>

- *Type:* str

An alphanumeric name (no spaces) to identify this event source in AWS EventBridge. Required only for 'aws_eventbridge' type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#event_source_name LogStream#event_source_name}

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-okta.logStream.LogStream.putSettings.parameter.host"></a>

- *Type:* str

The domain name for Splunk Cloud instance.

Don't include http or https in the string. For example: 'acme.splunkcloud.com'. Required only for 'splunk_cloud_logstreaming' type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#host LogStream#host}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-okta.logStream.LogStream.putSettings.parameter.region"></a>

- *Type:* str

The destination AWS region where event source is located. Required only for 'aws_eventbridge' type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#region LogStream#region}

---

###### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-okta.logStream.LogStream.putSettings.parameter.token"></a>

- *Type:* str

The HEC token for your Splunk Cloud HTTP Event Collector. Required only for 'splunk_cloud_logstreaming' type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#token LogStream#token}

---

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-okta.logStream.LogStream.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.logStream.LogStream.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LogStream resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.logStream.LogStream.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import log_stream

logStream.LogStream.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.logStream.LogStream.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.logStream.LogStream.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import log_stream

logStream.LogStream.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.logStream.LogStream.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.logStream.LogStream.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import log_stream

logStream.LogStream.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.logStream.LogStream.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.logStream.LogStream.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import log_stream

logStream.LogStream.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LogStream resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.logStream.LogStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.logStream.LogStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogStream to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.logStream.LogStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.logStream.LogStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference">LogStreamSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.settingsInput">settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.logStream.LogStreamSettings">LogStreamSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.logStream.LogStream.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.logStream.LogStream.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.logStream.LogStream.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.logStream.LogStream.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.logStream.LogStream.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.logStream.LogStream.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.logStream.LogStream.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.logStream.LogStream.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.logStream.LogStream.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.logStream.LogStream.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.logStream.LogStream.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.logStream.LogStream.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.logStream.LogStream.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.logStream.LogStream.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.logStream.LogStream.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-okta.logStream.LogStream.property.settings"></a>

```python
settings: LogStreamSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference">LogStreamSettingsOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.logStream.LogStream.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-okta.logStream.LogStream.property.settingsInput"></a>

```python
settings_input: typing.Union[IResolvable, LogStreamSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.logStream.LogStreamSettings">LogStreamSettings</a>]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.logStream.LogStream.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.logStream.LogStream.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.logStream.LogStream.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.logStream.LogStream.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.logStream.LogStream.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStream.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.logStream.LogStream.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogStreamConfig <a name="LogStreamConfig" id="@cdktf/provider-okta.logStream.LogStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.logStream.LogStreamConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import log_stream

logStream.LogStreamConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  settings: LogStreamSettings = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.name">name</a></code> | <code>str</code> | Unique name for the Log Stream object. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.type">type</a></code> | <code>str</code> | Streaming provider used - 'aws_eventbridge' or 'splunk_cloud_logstreaming'. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettings">LogStreamSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamConfig.property.status">status</a></code> | <code>str</code> | Stream status. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name for the Log Stream object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#name LogStream#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Streaming provider used - 'aws_eventbridge' or 'splunk_cloud_logstreaming'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#type LogStream#type}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.settings"></a>

```python
settings: LogStreamSettings
```

- *Type:* <a href="#@cdktf/provider-okta.logStream.LogStreamSettings">LogStreamSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#settings LogStream#settings}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.logStream.LogStreamConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Stream status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#status LogStream#status}

---

### LogStreamSettings <a name="LogStreamSettings" id="@cdktf/provider-okta.logStream.LogStreamSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.logStream.LogStreamSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import log_stream

logStream.LogStreamSettings(
  account_id: str = None,
  edition: str = None,
  event_source_name: str = None,
  host: str = None,
  region: str = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettings.property.accountId">account_id</a></code> | <code>str</code> | AWS account ID. Required only for 'aws_eventbridge' type. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettings.property.edition">edition</a></code> | <code>str</code> | Edition of the Splunk Cloud instance. Could be one of: 'aws', 'aws_govcloud', 'gcp'. Required only for 'splunk_cloud_logstreaming' type. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettings.property.eventSourceName">event_source_name</a></code> | <code>str</code> | An alphanumeric name (no spaces) to identify this event source in AWS EventBridge. Required only for 'aws_eventbridge' type. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettings.property.host">host</a></code> | <code>str</code> | The domain name for Splunk Cloud instance. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettings.property.region">region</a></code> | <code>str</code> | The destination AWS region where event source is located. Required only for 'aws_eventbridge' type. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettings.property.token">token</a></code> | <code>str</code> | The HEC token for your Splunk Cloud HTTP Event Collector. Required only for 'splunk_cloud_logstreaming' type. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-okta.logStream.LogStreamSettings.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

AWS account ID. Required only for 'aws_eventbridge' type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#account_id LogStream#account_id}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-okta.logStream.LogStreamSettings.property.edition"></a>

```python
edition: str
```

- *Type:* str

Edition of the Splunk Cloud instance. Could be one of: 'aws', 'aws_govcloud', 'gcp'. Required only for 'splunk_cloud_logstreaming' type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#edition LogStream#edition}

---

##### `event_source_name`<sup>Optional</sup> <a name="event_source_name" id="@cdktf/provider-okta.logStream.LogStreamSettings.property.eventSourceName"></a>

```python
event_source_name: str
```

- *Type:* str

An alphanumeric name (no spaces) to identify this event source in AWS EventBridge. Required only for 'aws_eventbridge' type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#event_source_name LogStream#event_source_name}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-okta.logStream.LogStreamSettings.property.host"></a>

```python
host: str
```

- *Type:* str

The domain name for Splunk Cloud instance.

Don't include http or https in the string. For example: 'acme.splunkcloud.com'. Required only for 'splunk_cloud_logstreaming' type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#host LogStream#host}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-okta.logStream.LogStreamSettings.property.region"></a>

```python
region: str
```

- *Type:* str

The destination AWS region where event source is located. Required only for 'aws_eventbridge' type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#region LogStream#region}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-okta.logStream.LogStreamSettings.property.token"></a>

```python
token: str
```

- *Type:* str

The HEC token for your Splunk Cloud HTTP Event Collector. Required only for 'splunk_cloud_logstreaming' type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/log_stream#token LogStream#token}

---

## Classes <a name="Classes" id="Classes"></a>

### LogStreamSettingsOutputReference <a name="LogStreamSettingsOutputReference" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import log_stream

logStream.LogStreamSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetEdition">reset_edition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetEventSourceName">reset_event_source_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetToken">reset_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_edition` <a name="reset_edition" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetEdition"></a>

```python
def reset_edition() -> None
```

##### `reset_event_source_name` <a name="reset_event_source_name" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetEventSourceName"></a>

```python
def reset_event_source_name() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.resetToken"></a>

```python
def reset_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.editionInput">edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.eventSourceNameInput">event_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.eventSourceName">event_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.logStream.LogStreamSettings">LogStreamSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `edition_input`<sup>Optional</sup> <a name="edition_input" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.editionInput"></a>

```python
edition_input: str
```

- *Type:* str

---

##### `event_source_name_input`<sup>Optional</sup> <a name="event_source_name_input" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.eventSourceNameInput"></a>

```python
event_source_name_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `event_source_name`<sup>Required</sup> <a name="event_source_name" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.eventSourceName"></a>

```python
event_source_name: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.logStream.LogStreamSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogStreamSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.logStream.LogStreamSettings">LogStreamSettings</a>]

---



